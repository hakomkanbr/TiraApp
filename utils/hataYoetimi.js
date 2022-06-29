
import _app from "./_app";
import Swal from "sweetalert2";


const convertErrorsToHtml = (errors, htmlType) => {
  let html = ``;
  if (Array.isArray(errors) && errors.length > 0) {
    errors.map((err, i) => {
      html += `<ul class="callout callout-${
        err?.key == "error" ? "danger" : err.key != null ? err.key : "danger"
      }"> <li> ${err?.title ? `<div>${err.title}</div>` : ""}${
        err?.description ? err.description : "حصل خطأ غير معروف"
      }</li>
      </ul>`;
    });
  } else {
    html = `<ul class="callout callout-${
      errors?.key == "error"
        ? "danger"
        : errors?.key != null
        ? errors.key
        : "danger"
    }"> <li> ${errors?.title ? `<div>${errors.title}</div>` : ""}${
     ( errors?.description
        ? errors.description + " <b>("+errors.code+")</b>"
        : "حصل خطأ غير معروف")
    }</li>
   
    </ul>`;
  }
  return html;
};

const ErrorProvider = (data) => {
  var icon = Array.isArray(data)
    ? "info"
    : typeof data === "object"
    ? data?.key
    : "info";

  var html = convertErrorsToHtml(data);
  console.info("icon_____!");
  console.info(icon);
  Swal.fire({
    title: Array.isArray(data)
      ? "خطأ"
      : typeof data === "object"
      ? data?.title
      : "خطأ",
    icon: icon,
    html: html,
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: "Tamam",
  });
};

export const ErrorProviderCallout = (data) => {
  if(!data) return;
  var html = convertErrorsToHtml(data);

  if(status === 403){
    var y = document.getElementById("site-content");
    console.info(y);
    if(!y) return;
    y.innerHTML = `${html}`;
    return;  
  }

  var x = document.getElementById("error-content");
  if(!x) return;
  x.innerHTML = `${html}`;
 
};


export const hundleResponse = async (res)=>{
  console.info("res" , res);
  if(res.status == 400 || res.status == 500){
    ErrorProvider(await res.json());
    return;
  }

  if(res.status == 401){
    Swal.fire("error" ,  "token in valid" , "error");
    return;
  }

  if(res.status == 404){
    Swal.fire("error" , " لم ينم العثور على البيانات المطلوبة" , "error");
    return;
  }
  return res;
}

export default ErrorProvider;