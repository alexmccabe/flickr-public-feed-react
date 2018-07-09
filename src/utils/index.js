import { format as dateFormat } from 'date-fns';

export function formatDate(date, format = 'Mo MMM YYYY [at] HH:mm') {
    return dateFormat(date, format);
}

export function getPhotoID(url) {
    return url
        .split('/')
        .filter(item => item)
        .pop();
}

export function getPhotoUser(username) {
    return username.match(/"([^"]+)"/)[1];
}
