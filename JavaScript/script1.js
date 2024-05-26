document.addEventListener('DOMContentLoaded', function() {
    // Simulated property data
    const properties = [
        { address: '123 Main St', price: '$250,000', bedrooms: 3, bathrooms: 2 },
        { address: '456 Elm St', price: '$300,000', bedrooms: 4, bathrooms: 3 },
        { address: '789 Oak St', price: '$200,000', bedrooms: 2, bathrooms: 1 },
    ];

    const propertyListings = document.getElementById('property-listings');

    // Populate property listings
    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.innerHTML = `
            <h2>${property.address}</h2>
            <p>Price: ${property.price}</p>
            <p>Bedrooms: ${property.bedrooms}</p>
            <p>Bathrooms: ${property.bathrooms}</p>
        `;
        propertyListings.appendChild(propertyDiv);
    });
});
