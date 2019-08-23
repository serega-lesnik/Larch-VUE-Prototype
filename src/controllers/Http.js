import Axios from 'axios';
import { xml2json } from '@/utils/xmlUtils';

const API_SERVICE_URL = 'http://192.168.21.136/hpe/';

const getOptions = () => {
	const options = {
		headers: {},
	};
	return options;
};

const getUrl = (sections) => {
	let url = '';
	if (sections instanceof Object) {
		if (
			sections.wcd &&
			Array.isArray(sections.wcd) &&
			sections.wcd.length > 0
		) {
			sections.wcd.forEach(section => {
				url += `{${section}}`;
			});
			if (url) {
				url = `wcd?${url}`;
			}
		}
	}
	return url;
}

const getResponseData = (response, wcds) => {
	const data = xml2json(response);
	wcds.forEach(section => {
		if (!data.hasOwnProperty(section)) {
			data[section] = {};
		}
	})
	return data;
}

class Http {
	static get = (sections, param) => {
		const url = getUrl(sections);
		const query = param || ''; // TODO: QueryString.encode(param)
		const path = `${API_SERVICE_URL}${url}${query}`
		const options = getOptions();

		const watcher = new Promise((resolve, reject) => {
			const onSuccess = response => resolve(getResponseData(response, sections.wcd));
			const onError = response => reject(response);

			Axios.get(path, options).then(onSuccess).catch(onError);
		});
		return watcher;
	}
}

export default Http;