<template>
    <ssh-pre language="js" :dark=true>{{code}}</ssh-pre>
</template>

<script lang="ts">
import 'simple-syntax-highlighter/dist/sshpre.css'
import { Options, Vue } from 'vue-class-component'
import SshPre from 'simple-syntax-highlighter'

@Options({
    components: {
        SshPre
    },
    props: {
        code: String
    }
})
export default class CodeSample extends Vue {}
</script>

<style>
.ssh-pre__content
{
    font-family: 'Hack', 'monospace';
    font-size: 9pt;
}
</style>
