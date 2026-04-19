/*
    The following examples are very basic and assume that there is no
    framework being used. Always refer to your framework's documentation
    to ensure you are following best practices.
*/

// Retrieve the vouch data from your human.json
export const retrieve_vouch_data = async () => {

    const human_json_location = `https://my_domain.com/human.json`;

    const hjson_data = await fetch(human_json_location).then((res) => res.json());

    return hjson_data?.vouches || [];

}

// Retrieves the fursona data from your array of vouches.
export const retrieve_vouches_fursona_data = async (vouches) => {

    const vouches_sona_data = [];

    for ( const vouch in vouches ) {

        const fetch_url = `${vouch.url}/.well-known/fursona.json`

        const fetch_response = await fetch(fetch_url).then((res) => res.json());''

        const sona_data = fetch_response?.sonas || [];

        if ( sona_data && sona_data.length > 0 ) {

            // Primary sona should be the first one in the list.
            const primary_sona = sona_data[0];

            // You may want to add additional checks to see if they have 
            // the data you want to use in their schema. I keep it simple
            // and only check for a name.
            if ( primary_sona?.name ) {

                vouches_sona_data.push(primary_sona);

            }

        }

    }

    return vouches_sona_data;

}

// Creates your HTML content.
// Again, refer to your framework (if using one) for best practice.
export const generate_fursona_html = (fursona_data) => {

    // super basic escape function for xss protection.
    const escape_text = (str) => {

        const p_el = document.createElement('p');

        p_el.textContent = str;

        return p_el;

    }

    let final_html = "";

    // To keep things simple, this example only displays a fursona's name and pronouns
    for ( const fursona in fursona_data ) {

        final_html += `
        <div>
            ${escape_text(fursona.name)} <br/>
            ${escape_text(fursona.pronouns)} <br/>
        </div>
        `

    }

    return final_html;

}