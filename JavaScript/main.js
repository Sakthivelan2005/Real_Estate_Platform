// Sample property data (replace with actual data from backend)
const properties = [
    {
        id: 1,
        title: 'Beautiful House in Suburb',
        price: '$500,000',
        description: 'This lovely house features 3 bedrooms, 2 bathrooms, and a spacious backyard.',
        image: 'suburb.png'
    },
    {
        id: 2,
        title: 'Luxury Condo Downtown',
        price: '$800,000',
        description: 'Experience urban living at its finest in this luxurious downtown condo.',
        image: 'downtown.png'
    },
    {
        id: 3,
        title: 'Cozy Apartment near Park',
        price: '$300,000',
        description: 'Enjoy the convenience of city life in this cozy apartment located near the park.',
        image: 'cozy.png'
    }
];

// Function to display property listings
function displayPropertyListings() {
    const propertyListings = document.getElementById('propertyListings');
    propertyListings.innerHTML = '';
    properties.forEach(property => {
        const propertyCard = `
            <div class="property">
                <img src="${property.image}" alt="${property.title}">
                <h3>${property.title}</h3>
                <p><strong>Price:</strong> ${property.price}</p>
                <p>${property.description}</p>
                <a href="#" onclick="viewPropertyDetails(${property.id})">View Details</a>
            </div>
        `;
        propertyListings.innerHTML += propertyCard;
    });
}

// Function to view property details
function viewPropertyDetails(id) {
    const property = properties.find(prop => prop.id === id);
    if (property) {
        alert(`Property: ${property.title}\nPrice: ${property.price}\nDescription: ${property.description}`);
    } else {
        alert('Property not found.');
    }
}

// Display property listings when the page loads
window.onload = function() {
    displayPropertyListings();
};

// Handle form submission (replace with backend integration)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
    alert('Form submitted successfully!');
});
