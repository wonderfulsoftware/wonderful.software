<script setup>
import { ref } from 'vue';
import { ulid } from 'ulid'

const feedbackEmojis = ['😀', '😮', '😐', '😞', '😍', '🤔', '😴', '🤩'];
let sent = ref(false);
let moreLink = ref('');

function getUserId() {
  let userId = localStorage.getItem('wondersoftUserId')
  if (!userId) {
    userId = ulid()
    localStorage.setItem('wondersoftUserId', userId)
  }
  return userId
}

function sendReaction(emoji) {
  try {
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSfGoffFITUQ1qncl8n5C4lBK8FBpO4_at2Rwn7Mf-GPpBy9WQ/viewform?${new URLSearchParams({
      usp: 'pp_url',
      'entry.818157458': location.href,
      'entry.799811132': emoji
    })}`
    moreLink.value = url
    navigator.sendBeacon('https://wonderfeedback.lovely.workers.dev/feedback', new URLSearchParams({
      reaction: emoji,
      path: location.pathname,
      uid: getUserId()
    }))
    sent.value = true
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <div class="feedback-form">
    <p v-if="!sent">
      คลิกที่ไอคอนข้างล่างเพื่อส่งฟีดแบ็ค
    </p>
    <p v-else>
      <strong>ขอบคุณสำหรับฟีดแบ็ค! 🙏</strong>
    </p>
    <div class="feedback-emojis">
      <template v-if="!sent">
        <button v-for="emoji in feedbackEmojis" :key="emoji" :class="{ 'selected': selectedEmoji === emoji }"
          @click="sendReaction(emoji)">
          {{ emoji }}
        </button>
      </template>
      <template v-else>
        <p>
          <a :href="moreLink" target="_blank">&gt;&gt; คลิกที่นี่เพื่อส่งความคิดเห็นเพิ่มเติม &lt;&lt;</a>
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.feedback-form {
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
}

.feedback-emojis {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
}

.feedback-emojis button {
  background: none;
  border: none;
  font-size: 32px;
  padding: 8px;
  cursor: pointer;
}

.feedback-emojis button:hover {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .feedback-emojis button {
    font-size: 28px;
    padding: 8px 6px;
  }
}
</style>
