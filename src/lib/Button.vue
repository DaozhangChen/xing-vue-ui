<template>
  <button class="xing-ui-button" :class="classes" :disabled="disabled">
    <div class="xing-ui-button-flex">
      <span v-if="loading" class="xing-ui-button-loading"></span>
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  size?: 'normal' | 'big' | 'small'
  theme?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  type?: 'danger'
  disabled?: boolean
  loading?: boolean
}>()
const { size, theme, type } = props


const classes = computed(() => {
  return {
    [`xing-ui-button-size-${size}`]: size,
    [`xing-ui-button-theme-${theme}`]: theme,
    [`xing-ui-button-type-${type}`]: type,
  }
})

</script>

<style lang="scss">
.xing-ui-button-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.xing-ui-button {
  background: #fff;
  color: black;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s linear;

  &[disabled] {
    cursor: not-allowed;
    filter: grayscale(100%);

    &:hover {
      background: #fff;
      color: black;
      border-color: #d9d9d9;
    }
  }

  &:hover {
    border-color: rgba(31, 173, 12, 0.82);
    color: rgba(31, 173, 12, 0.82);
  }

  &-size-normal {
    height: 32px;
  }

  &-size-big {
    height: 40px;
    font-size: 18px;
    padding: 4px 18px;

    & .xing-ui-button-loading {
      width: 18px;
      height: 18px;
    }
  }

  &-size-small {
    height: 24px;
    font-size: 12px;
    padding: 4px 13px;

    & .xing-ui-button-loading {
      width: 12px;
      height: 12px;
    }
  }

  &-theme-default {
    background: #fff;
    border: 1px solid #d9d9d9;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    color: black;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        background: #fff;
        color: black;
        border: 1px solid #d9d9d9;
      }
    }
  }

  &-theme-default:hover {
    background: #fff;
    border-color: rgba(31, 173, 12, 0.82);
    color: rgba(31, 173, 12, 0.82);
  }

  &-theme-primary {
    background-color: rgba(31, 173, 12, 0.82);
    color: white;
    border: 1px solid rgba(31, 173, 12, 0.82);
    box-shadow: 0 2px 0 rgb(5 145 255 / 10%);

    & .xing-ui-button-loading {
      border-color: white white white transparent;
    }

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      & .xing-ui-button-loading {
        border-color: white white white transparent;
      }

      &:hover {
        background-color: rgba(31, 173, 12, 0.82);
        color: white;
        border: 1px solid rgba(31, 173, 12, 0.82);
      }
    }
  }

  &-theme-primary:hover {
    background-color: rgba(26, 201, 36, 0.6);
    border-color: rgba(26, 201, 36, 0.6);
    color: white;
  }

  &-theme-dashed {
    background: #fff;
    border-style: dashed;
    border-color: rgb(217, 217, 217);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    color: black;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        background: #fff;
        color: black;
        border: 1px dashed rgb(217, 217, 217);
      }
    }
  }

  &-theme-dashed:hover {
    background: #fff;
    border-color: rgba(31, 173, 12, 0.82);
    color: rgba(31, 173, 12, 0.82);
  }

  &-theme-text {
    border-color: transparent;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        border-color: transparent;
      }
    }
  }

  &-theme-text:hover {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.06);
  }

  &-theme-link {
    background: transparent;
    border: transparent;
    color: rgba(31, 173, 12, 0.82);

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        background: transparent;
        color: rgba(31, 173, 12, 0.82);
        border: none
      }
    }
  }

  &-type-link:hover {
    color: rgba(26, 201, 36, 0.6);
  }

  &-type-danger {
    background-color: #ff4d4f;
    color: white;
    box-shadow: 0 2px 0 rgb(255 38 5 / 6%);
    border-color: #ff4d4f;

    & .xing-ui-button-loading {
      border-color: white white white transparent;
    }

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        border-color: #ff4d4f;
        background-color: #ff4d4f;
      }
    }
  }

  &-type-danger.xing-ui-button-theme-default,
  &-type-danger.xing-ui-button-theme-dashed {
    color: #ff4d4f;
    background-color: white;

    & .xing-ui-button-loading {
      border-color: #ff4d4f #ff4d4f #ff4d4f transparent;
    }
  }

  &-type-danger.xing-ui-button-theme-text {
    color: #ff4d4f;
    background-color: white;
    border: transparent;

    & .xing-ui-button-loading {
      border-color: #ff4d4f #ff4d4f #ff4d4f transparent;
    }
  }

  &-type-danger.xing-ui-button-theme-link {
    color: #ff4d4f;
    background-color: transparent;

    & .xing-ui-button-loading {
      border-color: #ff4d4f #ff4d4f #ff4d4f transparent;
    }
  }

  &-type-danger:hover {
    color: white;
    background-color: #ff7875;
    box-shadow: 0 2px 0 rgb(255 38 5 / 6%);
    border-color: #ff7875;
  }

  &-type-danger:hover.xing-ui-button-theme-default:hover,
  &-type-danger:hover.xing-ui-button-theme-dashed:hover {
    background-color: white;
    color: #ff7875;
    border-color: #ff7875;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        color: #ff4d4f;
        border-color: #ff4d4f;
      }
    }
  }

  &-type-danger:hover.xing-ui-button-theme-text:hover {
    background-color: #fff2f0;
    color: #ff7875;
    border-color: #fff2f0;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        background: white;
        color: #ff4d4f;
        border: none;
      }
    }
  }

  &-type-danger:hover.xing-ui-button-theme-link:hover {
    color: #ff7875;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
      filter: grayscale(100%);

      &:hover {
        color: #ff4d4f;
      }
    }
  }

  &-loading {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 50%;
    border-color: rgba(31, 173, 12, 0.82) rgba(31, 173, 12, 0.82) rgba(31, 173, 12, 0.82) transparent;
    border-style: solid;
    border-width: 2px;
    animation: xing-spin 1s infinite linear;
  }
}

@keyframes xing-spin {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>