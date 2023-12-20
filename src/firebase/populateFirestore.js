const admin = require('firebase-admin');
const serviceAccount = require('../../../Firebase Account Cred/little-restaurant-feca3-firebase-adminsdk-bgqep-080cfe1ff1');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// -----------------------------------------------------------------
// Reset Dates & Timeslots
// -----------------------------------------------------------------
async function resetAndPopulateDates() {
    // Delete existing documents
    const deleteBatch = db.batch();
    const querySnapshot = await db.collection('dates').get();
    querySnapshot.forEach((doc) => {
        deleteBatch.delete(doc.ref);
    });

    // Commit the deleted batch
    await deleteBatch.commit();
    console.log("Existing dates deleted.");

    // Generate new dates and populate with timeslots
    const createBatch = db.batch();
    const startDate = new Date();
    const endDate = new Date(new Date().getFullYear() + 1, 11, 31); // End of next year

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        const timeslots = [
            '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
            '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
        ];

        const dateDocRef = db.collection('dates').doc(dateStr);
        createBatch.set(dateDocRef, { timeslots });
    }

    // Commit the create batch
    await createBatch.commit();
    console.log("New dates and timeslots added.");
}

// -----------------------------------------------------------------
// Reset Bookings
// -----------------------------------------------------------------
async function resetBookings() {
    // Delete existing documents
    const deleteBatch = db.batch();
    const querySnapshot = await db.collection('bookings').get();
    querySnapshot.forEach((doc) => {
        deleteBatch.delete(doc.ref);
    });

    // Commit the deleted batch
    await deleteBatch.commit();
    console.log("Existing bookings deleted.");
}

// -----------------------------------------------------------------
// Reset Specials
// -----------------------------------------------------------------
async function resetSpecials() {
    // Delete existing documents
    const deleteBatch = db.batch();
    const querySnapshot = await db.collection('specials').get();
    querySnapshot.forEach((doc) => {
        deleteBatch.delete(doc.ref);
    });

    // Commit the deleted batch
    await deleteBatch.commit();
    console.log("Existing specials deleted.");

    // Create new testimonials
    const createBatch = db.batch();
    const specials = [
        {
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
            image: "https://firebasestorage.googleapis.com/v0/b/little-restaurant-5673b.appspot.com/o/specials%2Flemon%20dessert.jpg?alt=media&token=e8d714a6-fd89-45f5-8e3b-f55736c68f1f",
            name: "Lemon Dessert"            ,
            price: 5.20,
            ingredients: ["Lemon", "Butter", "Suggar", "Salt", "Milk", "Eggs",]
        },
        {
            description: "Our Broschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
            image: "https://firebasestorage.googleapis.com/v0/b/little-restaurant-5673b.appspot.com/o/specials%2Fbruchetta.svg?alt=media&token=e89d4984-ffa3-4744-8d61-0ac22aea18a7",
            name: "Bruchetta",
            price: 5.99,
            ingredients: ["Extra virgin olive oil", "Minced fresh garlic", "Roma tomatoes", "Balsamic vinegar", "Salt", "Black pepper", "Basil ribbons", "French bread", "Finely shredded parmesan cheese"]
        },
        {
            description: "The famous greek salad of crispy lettce peppers, olived and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
            image: "https://firebasestorage.googleapis.com/v0/b/little-restaurant-5673b.appspot.com/o/specials%2Fgreek%20salad.jpg?alt=media&token=44fc4021-c2e6-4b07-a822-d79aa771a413",
            name: "Greek salad",
            price: 12.99,
            ingredients: ["Extra-virgin olive oil","Garlic", "Dried oregano", "Freshly ground black pepper", "Salt", "Cucumber", "Tomatoes", "Feta Cheese", "Pitted Kalamata olives"]
        }
    ];

    specials.forEach((special) => {
        const docRef = db.collection('specials').doc();
        createBatch.set(docRef, special);
    });

    // Commit the create batch
    await createBatch.commit();
    console.log("New specials added.");

}
// -----------------------------------------------------------------
// Reset Testimonials
// -----------------------------------------------------------------
async function resetTestimonials() {
    // Delete existing documents
    const deleteBatch = db.batch();
    const querySnapshot = await db.collection('testimonials').get();
    querySnapshot.forEach((doc) => {
        deleteBatch.delete(doc.ref);
    });

    // Commit the deleted batch
    await deleteBatch.commit();
    console.log("Existing testimonials deleted.");

    // Create new testimonials
    const createBatch = db.batch();
    const testimonials = [
        {
            atmosphereRating: 4,
            foodRating: 4,
            serviceRating: 4,
            rating: 4,
            reviewText: 'That was a very nice experience!',
            userName: 'Nikolaos'
        },
        {
            atmosphereRating: 5,
            foodRating: 5,
            serviceRating: 5,
            rating: 5,
            reviewText: 'Excellent! Highly recommended!',
            userName: 'Giannis'
        },
        {
            atmosphereRating: 4,
            foodRating: 5,
            serviceRating: 5,
            rating: 5,
            reviewText: 'Amazing food!',
            userName: 'Konstantinos'
        },
        {
            atmosphereRating: 4,
            foodRating: 4,
            serviceRating: 4,
            rating: 4,
            reviewText: 'Nice location and atmosphere!',
            userName: 'Aris'
        }
    ];

    testimonials.forEach((testimonial) => {
        const docRef = db.collection('testimonials').doc();
        createBatch.set(docRef, testimonial);
    });

    // Commit the create batch
    await createBatch.commit();
    console.log("New testimonials added.");

}


// Call the function
resetAndPopulateDates()
    .then(resetBookings)
    .then(resetSpecials)
    .then(resetTestimonials)
    .then(() => {
        console.log('All operations completed succesfully.');
        process.exit(0); // Exits the Node.js process after completion
}).catch((error) => {
    console.error('Error:', error);
    process.exit(1); // Exits with an error code
});



// Execute the file from the terminal => node populateFirestore.js