<template>
  <ssh-pre language="js" :dark=true>
    {{code()}}
  </ssh-pre>
</template>

<script lang="ts">
import 'simple-syntax-highlighter/dist/sshpre.css'
import { Options, Vue } from 'vue-class-component'
import SshPre from 'simple-syntax-highlighter'

@Options({
  components: {
    SshPre
  }
})
export default class CodeSample extends Vue {
  code(): string {
    if (this.$slots.default === undefined)
      return ''
    return this.$slots.default()[0].children as string
  }
}
</script>
