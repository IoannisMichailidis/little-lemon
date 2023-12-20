import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] =useState(false);

    // if we don't use a ref --> infinite loop in useEffect because the _query is an array placed in the useEffect dependencies
    // _query is an array and is "different" on every function call.
    const query = useRef(_query).current;
    //_orderBy is also an array
    const orderBy = useRef(_orderBy).current;

    useEffect(() => {
        setIsPending(true);

        let ref = projectFirestore.collection(collection);

        // Query DB
        // read the block of code if a second argument(query exists). In that case the collection needs extra filtering based on the uid.
        if (query) {
            ref= ref.where(...query)
        }
        // Short
        // read the block of code if a third argument(short exists).
        if (orderBy) {
            ref = ref.orderBy(...orderBy)
        }

        //onSnapshot() is a method that listens for real-time updates to the Firestore collection
        const unsubscribe = ref.onSnapshot((onSnapshot) => {
            let results = []
            onSnapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            // update state
            setData(results);
            setError(null)
            setIsPending(false);
        }, (error) => {
            console.log(error)
            setError('could not fetch the data')
            setIsPending(false);
        })

        // unsubscribe on unmount
        return () => unsubscribe()

    },[collection, query, orderBy])


    return {data,isPending,error}
}

