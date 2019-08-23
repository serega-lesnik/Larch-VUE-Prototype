import X2js from '@/utils/X2js';

function xml2json(xml) {
	const x2js = new X2js({
		arrayAccessFormPaths: [
			'ResponseData.DeviceConfiguration.ManagementIpv4AddressTable.Entry'
		]
	});
	const jsonObj = x2js.xml_str2json(xml.data);
	return jsonObj;
}

function json2xml (json) {
	const x2js = new X2js();
	const xmlAsString = x2js.json2xml_str(json);
	return xmlAsString;
}

export {
	xml2json,
	json2xml
};
