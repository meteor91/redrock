'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "._Button-module_btn__a3T3p_sjggd_1 {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  line-height: 1.7;\n  background: #1B4DFF;\n  border-radius: 6px;\n  padding: 6px 12px;\n  border: 0;\n  color: #FFFFFF;\n}\n._Button-module_btn__a3T3p_sjggd_1:hover {\n  background: #0F3CD9;\n}\n._Button-module_btn__a3T3p_sjggd_1:focus {\n  box-shadow: 0px 1px 2px #E8EDFF, 0px 0px 0px 3px #E8EDFF;\n  border-radius: 6px;\n}\n._Button-module_btn__a3T3p_sjggd_1:active {\n  background: #0F3CD9;\n}\n._Button-module_btn__a3T3p_sjggd_1:disabled {\n  background: #B4C4FF;\n}\n._Button-module_btn-secondary__9jCHp_sjggd_1 {\n  color: #4A72FF;\n  border: 1px solid #4A72FF;\n  background: #FFFFFF;\n}\n._Button-module_btn-secondary__9jCHp_sjggd_1:hover {\n  background: #F2F5FF;\n}\n._Button-module_btn-secondary__9jCHp_sjggd_1:focus {\n  box-shadow: 0px 1px 2px #E8EDFF, 0px 0px 0px 3px #E8EDFF;\n  border-radius: 6px;\n}\n._Button-module_btn-secondary__9jCHp_sjggd_1:active {\n  background: #F2F5FF;\n  border: 1px solid #4A72FF;\n  box-shadow: 0px 1px 2px rgba(45, 54, 67, 0.05);\n}\n._Button-module_btn-secondary__9jCHp_sjggd_1:disabled {\n  background: #FFFFFF;\n  border: 1px solid #B4C4FF;\n}\n";
var style = {"btn":"Button-module_btn__a3T3p","btn-secondary":"Button-module_btn-secondary__9jCHp"};
styleInject(css_248z$2);

const Button = (props) => {
    const { label, variant, disabled, onClick } = props;
    return (React.createElement("button", { onClick: onClick, className: `${style.btn} ${variant ? style['btn-secondary'] : ''}`, disabled: disabled }, label));
};

var css_248z$1 = "._Input-module_input__YzB30_sa0oy_1 {\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n  color: #2D3643;\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  border: 1px solid #ced4da;\n  padding: 11px 14px;\n  width: 100%;\n}\n._Input-module_input__YzB30_sa0oy_1::placeholder {\n  color: #AFBACA;\n}\n._Input-module_input__YzB30_sa0oy_1:focus,\n._Input-module_input__YzB30_sa0oy_1:focus-visible {\n  outline: 0;\n  border: 1px solid #5E718D;\n}\n._Input-module_input__YzB30_sa0oy_1:disabled {\n  border: 1px solid #D7DFE9;\n}\n._Input-module_input-error__-0ZPn_sa0oy_1 {\n  color: #E92215;\n  background: #FFF5F4;\n  border: 1px solid #FFA19B;\n}\n";
var styles$1 = {"input":"Input-module_input__YzB30","input-error":"Input-module_input-error__-0ZPn"};
styleInject(css_248z$1);

const Input = (props) => {
    const { value, placeholder, disabled, error, onChange } = props;
    return (React.createElement("input", { className: `${styles$1.input} ${error ? styles$1['input-error'] : ''}`, placeholder: placeholder, onChange: onChange, value: value, disabled: disabled }));
};

var css_248z = "._FormInput-module_formInput__eLULS_ou76e_1 ._FormInput-module_label__LdfQK_ou76e_1 {\n  margin-bottom: 6px;\n  color: #3D4A5C;\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n}\n._FormInput-module_formInput__eLULS_ou76e_1 ._FormInput-module_message__hpaCg_ou76e_1 {\n  margin-top: 6px;\n  color: #3D4A5C;\n  font-size: 1rem;\n  line-height: 1.7;\n  font-weight: 400;\n}\n._FormInput-module_formInput__eLULS_ou76e_1 ._FormInput-module_message__hpaCg_ou76e_1._FormInput-module_error__7sIuY_ou76e_1 {\n  color: #E92215;\n}\n";
var styles = {"formInput":"FormInput-module_formInput__eLULS","label":"FormInput-module_label__LdfQK","message":"FormInput-module_message__hpaCg","error":"FormInput-module_error__7sIuY"};
styleInject(css_248z);

const FormInput = (props) => {
    const { label, value, placeholder, disabled, error, message, onChange } = props;
    return (React.createElement("div", { className: styles.formInput },
        label && (React.createElement("label", { className: styles.label }, label)),
        React.createElement(Input, { onChange: onChange, placeholder: placeholder, disabled: disabled, value: value, error: error }),
        message && (React.createElement("div", { className: `${styles.message} ${error ? styles.error : ''}` }, message))));
};

exports.Button = Button;
exports.FormInput = FormInput;
exports.Input = Input;
//# sourceMappingURL=index.js.map
