import Vue from "vue";
import VueI18n from "vue-i18n";
import vnMessage from "./vn.json";
import enMessage from "./en.json";
import _ from "lodash";

Vue.use(VueI18n);

const lang = _.get(window, "location.search");
const locale = lang ? lang.split("lang=").pop() : "vn";
const DEFAULT_LOCALE = locale;

const messages = {
  vn: vnMessage,
  en: enMessage
};

const i18n = new VueI18n({
  locale: DEFAULT_LOCALE,
  messages,
  fallbackLocale: DEFAULT_LOCALE
});

export default i18n;
