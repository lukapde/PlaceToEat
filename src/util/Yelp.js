const apiKey = 'Nfcx1Who82xN99RvKq5ZwHGzuUyvDg8gcLQBhP4no53M7_pn-O0H1sEMFY8OMRjzKMXs-t5dDy-JIW0q4sl5VuftB4_aQirJnNg3Kly8526iKB3fKoRZ9Jf_6grTXXYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].alias,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                });
            }
        });
    }
};

export default yelp;
    



