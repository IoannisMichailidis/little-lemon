import { useReducer, useEffect, useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOCUMENT':
            return {document: action.payload, isPending: false, success: true, error: null}
        case 'ERROR':
            return {document: null, isPending: false, success: false, error: action.payload}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false);

    // Refer to a collection in the firestore
    const refDoc = projectFirestore.collection(collection);
    // Only dispatch if not cancelled (moved to another page while completing the db transaction)
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    };

    // Add a document function
    const addDocument = async (doc) => {
        console.log('addDocument do something!', doc)
        // Fire the dispatch to use the firestoreReducer and update the isPending property of the state
        dispatch({ type: 'IS_PENDING'})
        // Add a document
        try {
            // Create a timestamp in case there is a need for shorting/ordering the documents
            const createAt = timestamp.fromDate(new Date());
            const addedDocument = await refDoc.add({...doc, createAt}); // add both the doc and createAt (timestamp)
            // Fire the dispatch to use the firestoreReducer and update the document property of the state
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument});
        }
        catch(err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message})
        }
    };

    // Cleanup function
    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return {addDocument, response}
}