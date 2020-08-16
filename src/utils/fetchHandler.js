import axios from "axios"

const fetchHandler = ({
    method= 'GET',
    url="/api/v1/info",
    body=null,
}) => {
    const request = {
        method: method,
        url: `https://backend.fa.ehsangazar.com${url}`,
    }
    if (body){
        request.data = body
    }
    return axios(request);
}

export default fetchHandler