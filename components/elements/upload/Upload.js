import { useState } from "react";
import { Modal, Upload } from "antd";
import { getBase64Duzenle } from "lib/helpers/getBase64";


const UploadCustum = (props) => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const onPreview = async (file) => {
    console.info(file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64Duzenle(
        file.originFileObj,
        function (image) {
          return image;
        }
      );
    }

    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  if(props.single){
    return (
      <>
        <Upload.Dragger customRequest={
        ()=> false
      } maxCount={1} onPreview={onPreview} {...props}>{props.children}</Upload.Dragger>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }

  return (
    <>
      <Upload customRequest={
        ()=> false
      } onPreview={onPreview} {...props}>{props.children}</Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};
export default UploadCustum;