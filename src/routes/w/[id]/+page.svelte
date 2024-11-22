<script lang="ts">
    import { page } from "$app/stores";
    import { namespace, title } from "../../../store/document"
    title.set($page.params.id);
    namespace.set("doc")
</script>
<h1>{$title}</h1>