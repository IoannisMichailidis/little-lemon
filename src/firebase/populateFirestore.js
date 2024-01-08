const admin = require('firebase-admin');
const serviceAccount = require('../../../Firebase Account Cred/little-restaurant-feca3-firebase-adminsdk-bgqep-080cfe1ff1');

const { testimonials } = require('./data/testimonials.js');
const { products } = require('./data/products.js');

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
// Reset Products
// -----------------------------------------------------------------
async function resetProducts() {
    // Delete existing documents
    const deleteBatch = db.batch();
    const querySnapshot = await db.collection('products').get();
    querySnapshot.forEach((doc) => {
        deleteBatch.delete(doc.ref);
    });

    // Commit the deleted batch
    await deleteBatch.commit();
    console.log("Existing products deleted.");

    // Create new products
    const createBatch = db.batch();

    products.forEach((product) => {
        const docRef = db.collection('products').doc();
        createBatch.set(docRef, product);
    });

    // Commit the create batch
    await createBatch.commit();
    console.log("New products added.");

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
    .then(resetProducts)
    .then(resetTestimonials)
    .then(() => {
        console.log('All operations completed succesfully.');
        process.exit(0); // Exits the Node.js process after completion
}).catch((error) => {
    console.error('Error:', error);
    process.exit(1); // Exits with an error code
});



// Execute the file from the root directory => npm run populateFirebase