<template>
    <main>
        <select v-model="locale">
        <option>zh-TW</option>
        <option>en-US</option>
        </select>
        <p>{{ $t("cancel") }}</p>
        <p>{{ $t("email") }}</p>
        <p>{{ $t("date") }}</p>
        <p>{{ $t("subject") }}</p>
        <p>{{ $t("message") }}</p>
        <p>{{ $t("upload") }}</p>
        <div class="mt-10">插入固定的字</div>
        <p>{{ $t('title', { appName: 'Vue.js' }) }}</p>
        <div class="mt-10">定義大小寫或首字母大寫的單字：{{ $t('practice') }}</div>
        <div>定義大寫</div>
        <p>{{ $t('upperpractice') }}</p>
        <div>定義小寫</div>
        <p>{{ $t('lowerpractice') }}</p>
        <div>定義首字母大寫</div>
        <p>{{ $t('capitalizepractice') }}</p>
    </main>
</template>
<script setup lang='ts'>
    import { useI18n } from 'vue-i18n';

    const { locale } = useI18n();
</script>
<style scoped></style>