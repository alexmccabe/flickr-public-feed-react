export function getPhotoID(url) {
    return url
        .split('/')
        .filter(item => item)
        .pop();
}
