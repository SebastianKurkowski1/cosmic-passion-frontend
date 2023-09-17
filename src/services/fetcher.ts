export enum Method {
    POST = 'POST',
    GET = 'GET',
}

const request = async <T>(method: Method, route: string, body?: never): Promise<T> => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const routeComputed = route.startsWith('/') ? route : `/${route}`;

    //const API_BASE_URL = '';
    const response = await fetch(`https://127.0.0.1:8000${routeComputed}`, {
        headers,
        credentials: 'include',
        method,
        mode: 'no-cors',
        body: body ? JSON.stringify(body) : undefined,
    });

    if (response.status.toString().startsWith('5')) {
        // handle errors
    }

    if (response.status.toString().startsWith('4')) {
        // handle errors
    }

    return await response.json() as T;
}

export default request;