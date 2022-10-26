"use strict";
var vue = require("vue");
var Button = vue.defineComponent({
  name: "CButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(_props, {
    slots
  }) {
    const prefixCls = "cu-btn";
    const cls = vue.computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${_props.type}`]: _props.type !== "default"
    }));
    return () => {
      return vue.createVNode("button", {
        "class": cls.value
      }, [slots.default && slots.default()]);
    };
  }
});
module.exports = Button;
