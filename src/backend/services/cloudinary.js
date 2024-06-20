import { v2 as cloudinary } from 'cloudinary';
import HttpError from '../middlewares/HttpError.js';


/**
 * Uploads an image to Cloudinary.
 *
 * @param {string} imagePath - The path of the image to upload
 * @return {string} The secure URL of the uploaded image
 */
const CloudinaryUploadImage = async (imagePath) => {

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.secure_url;
  } catch (error) {
    //console.error(error);
    throw HttpError(500, 'Cloudinary upload image error');}
};

export default CloudinaryUploadImage;


/*
response object from cloudinary:

result =
{
  asset_id: 'cf4a479f2f034af41f2e8f4c74868a4e',
  public_id: 'IMG_20210502_133456',
  version: 1718907191,
  version_id: 'b973d63d90d6aab0d4eba23a37c584e4',
  signature: '5b518707d7f2251db2d3128ee4c142b880af764b',
  width: 3000,
  height: 4000,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2024-06-20T18:13:11Z',
  tags: [],
  bytes: 2808758,
  type: 'upload',
  etag: '5c73507f905082ad72fa01dc548ff82d',
  placeholder: false,
  url: 'http://res.cloudinary.com/dmo99evjz/image/upload/v1718907191/IMG_20210502_133456.jpg',
  secure_url: 'https://res.cloudinary.com/dmo99evjz/image/upload/v1718907191/IMG_20210502_133456.jpg',
  asset_folder: '',
  display_name: 'IMG_20210502_133456',
  overwritten: true,
  original_filename: 'IMG_20210502_133456',
  api_key: '521778346988472'
}
  */
