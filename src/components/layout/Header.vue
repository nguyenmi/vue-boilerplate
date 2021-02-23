<template>
  <ul class="header">
    <li
      v-for="(menu, index) in menus"
      :key="index"
      @click="redirectLink(menu.path)"
      class="menu"
    >
      <span v-show="menu.icon" class="icon-home" />
      <span>{{ $t(menu.name) }}</span>
    </li>
    <div class="locale-changer">
      <a-icon type="global" />
      <a-select v-model="$i18n.locale" @change="changeLanguage">
        <a-select-option
          v-for="(lang, index) in langs"
          :key="index"
          :value="lang.value"
        >
          {{ lang.name }}
        </a-select-option>
      </a-select>
    </div>
  </ul>
</template>

<script>
import data from "./data.json";
import _ from "lodash";

export default {
  name: "Header",
  data() {
    return {
      menus: data.menus,
      langs: data.langs
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$router.push({ query: { lang: `${lang}` } });
    },
    redirectLink(path) {
      if (path !== _.get(this.$route, "path")) {
        const lang = _.get(this.$route, "query.lang") || this.langs[0].value;
        this.$router.push({ path, query: { lang: `${lang}` } });
      }
    }
  }
};
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 4px 4px 0 var(--Black100);
  padding: 20px;
  .icon-home {
    margin-right: 5px;
  }
  .menu {
    cursor: pointer;
    margin-right: 2.5em;
    color: var(--Black850);
    font-family: "ProximaNovaRegular";
  }
  .ant-select-selection {
    border: unset;
    height: unset;
    min-width: 85px;
    .ant-select-selection__rendered {
      margin: 0 10px;
      line-height: 1.5;
    }
    .ant-select-arrow {
      display: none;
    }
  }
  .ant-select-open,
  .ant-select-focused {
    .ant-select-selection {
      border-color: unset;
      box-shadow: unset;
    }
  }
}
</style>
