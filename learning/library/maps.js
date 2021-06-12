import openGoogleMap from './../google';
import openYandexMap from './yandex';

const openAllMaps = () => {
    openGoogleMap();
    openYandexMap();
}

export default openAllMaps;