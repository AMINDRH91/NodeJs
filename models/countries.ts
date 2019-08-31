import * as mongoose from 'mongoose';
// import * as mongoosePaginate from'mongoose-paginate-v2';

const countriesSchema = new mongoose.Schema({
		"CLDR display name": String,
		"Capital": String,
		"Continent": String,
		"DS": String,
		"Developed / Developing Countries": String,
		"Dial": String,
		"EDGAR": String,
		"FIFA": String,
		"FIPS": String,
		"GAUL": String,
		"Geoname ID": String,
		"Global Code": String,
		"Global Name": String,
		"IOC": String,
		"ISO3166-1-Alpha-2": String,
		"ISO3166-1-Alpha-3": String,
		"ISO3166-1-numeric": String,
		"ISO4217-currency_alphabetic_code": String,
		"ISO4217-currency_country_name": String,
		"ISO4217-currency_minor_unit": String,
		"ISO4217-currency_name": String,
		"ISO4217-currency_numeric_code": String,
		"ITU": String,
		"Intermediate Region Code": String,
		"Land Locked Developing Countries (LLDC)": String,
		"Languages": String,
		"Least Developed Countries (LDC)": String,
		"M49": String,
		"MARC": String,
		"Region Code": String,
		"Region Name": String,
		"Small Island Developing States (SIDS)": String,
		"Sub-region Code": String,
		"Sub-region Name": String,
		"TLD": String,
		"UNTERM Arabic Formal": String,
		"UNTERM Arabic Short": String,
		"UNTERM Chinese Formal": String,
		"UNTERM Chinese Short": String,
		"UNTERM English Formal": String,
		"UNTERM English Short": String,
		"UNTERM French Formal": String,
		"UNTERM French Short": String,
		"UNTERM Russian Formal": String,
		"UNTERM Russian Short": String,
		"UNTERM Spanish Formal": String,
		"UNTERM Spanish Short": String,
		"WMO": String,
		"is_independent": String,
		"official_name_ar": String,
		"official_name_cn": String,
		"official_name_en": String,
		"official_name_es": String,
		"official_name_fr": String,
		"official_name_ru": String
});
// countriesSchema.plugin(mongoosePaginate);

const Countries = mongoose.model('Countries', countriesSchema);

export default Countries;
