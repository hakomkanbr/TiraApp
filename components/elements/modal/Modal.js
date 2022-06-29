import { Modal, Button } from 'antd';

const ModalCustum = (props) => {
    var {visible , setVisible , title} = props;
    return (
      <>
        <Modal
          title={title ?? "Modal 1000px width"}
          {...props}
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={500}
        >
            {props.children}
        </Modal>
      </>
    );
};

export default ModalCustum;
