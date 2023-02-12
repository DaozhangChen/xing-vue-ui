<template>
  <button class="xing-ui-switch" @click="toggle"
    :class="{['xing-ui-switch-checked']:value,['xing-ui-switch-disabled']:disabled}">
    <span></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: boolean
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:value', visible: boolean): void
}>()

const toggle = () => {
  if (props.disabled) { return }
  emit("update:value", !props.value)
}
</script>

<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;

.xing-ui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;
  cursor: pointer;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all 250ms;
  }

  &.xing-ui-switch-checked {
    background: rgba(31, 173, 12, 0.82);

    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &.xing-ui-switch-disabled {
    cursor: not-allowed;

    &:active {
      >span {
        width: $h2;
        ;
      }
    }

    &.xing-ui-switch-checked:active {
      >span {
        width: $h2;
        margin-left: 0;
      }
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    >span {
      width: $h2 + 4px;
    }
  }

  &.xing-ui-switch-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>