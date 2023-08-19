<script setup>
import { onMounted, ref } from 'vue';
import { ulid } from 'ulid'

const feedbackEmojis = ['😀', '😮', '😐', '😞', '😍', '🤔', '😴', '🤩'];
let reactionStatus = ref('waiting');
let messageStatus = ref('waiting');

let message = ref('');
let name = ref('');

onMounted(() => {
  // Restore the name from localStorage
  name.value = localStorage.getItem('wondersoftUserName') ?? '';
})

// reactionStatus.value = 'sent' // for debugging
// messageStatus.value = 'sending' // for debugging

const url = 'https://wonderful-software-feedback-collector-production.up.railway.app/feedback'

function getUserId() {
  let userId = localStorage.getItem('wondersoftUserId')
  if (!userId) {
    userId = ulid()
    localStorage.setItem('wondersoftUserId', userId)
  }
  return userId
}

async function sendReaction(emoji) {
  try {
    reactionStatus.value = 'sending'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'reaction',
        reaction: emoji,
        userId: getUserId(),
        entity: window.location.pathname
      })
    })
    if (response.ok) {
      reactionStatus.value = 'sent'
    } else {
      reactionStatus.value = 'error'
    }
  } catch (error) {
    console.error(error)
    reactionStatus.value = 'error'
  }
}

async function sendMessage() {
  // Store the name in localStorage
  localStorage.setItem('wondersoftUserName', name.value)

  // Don't send empty messages
  if (!message.value.trim()) {
    messageStatus.value = 'sent'
    return
  }

  try {
    messageStatus.value = 'sending'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'feedback',
        feedback: message.value,
        name: name.value,
        userId: getUserId(),
        entity: window.location.pathname
      })
    })
    if (response.ok) {
      messageStatus.value = 'sent'
    } else {
      messageStatus.value = 'error'
    }
  } catch (error) {
    console.error(error)
    messageStatus.value = 'error'
  }
}

</script>

<template>
  <div class="feedback-form">
    <p>How was your experience on this page?</p>
    <div class="feedback-emojis">
      <template v-if="reactionStatus === 'waiting'">
        <button v-for="emoji in feedbackEmojis" :key="emoji" :class="{ 'selected': selectedEmoji === emoji }"
          @click="sendReaction(emoji)">
          {{ emoji }}
        </button>
      </template>
      <template v-else-if="reactionStatus === 'sending'">
        <p><strong>Sending feedback…</strong></p>
      </template>
      <template v-else-if="reactionStatus === 'sent'">
        <p><strong>Thank you for your feedback!</strong></p>
      </template>
      <template v-else>
        <p><strong>Oops, something went wrong. Please try again later.</strong></p>
      </template>
    </div>
    <template v-if="reactionStatus === 'sent'">
      <template v-if="messageStatus === 'waiting' || messageStatus === 'sending'">
        Is there anything else you'd like to tell me? (Optional)
        <div class="message-form">
          <textarea
            placeholder="Type your message here, e.g. what you liked or disliked about this page, or anything that confused you.?"
            :disabled="messageStatus === 'sending'" v-model="message"></textarea>
          <div style="display: flex; gap: 8px; margin-top: 8px">
            <input type="text" placeholder="Your name (optional)" v-model="name" :disabled="messageStatus === 'sending'">
            <button @click="sendMessage()" :disabled="messageStatus === 'sending'">
              {{ messageStatus === 'sending' ? 'Sending…' : 'Send feedback' }}
            </button>
          </div>
        </div>
      </template>
      <template v-else-if="messageStatus === 'sent'">
        <p>{{ message.trim() !== ''
          ? '…and thank you for the extra message!'
          : 'Feel free to send me a message next time!' }}</p>
      </template>
      <template v-else>
        <p><strong>Oops, something went wrong. Please try again later.</strong></p>
      </template>
    </template>
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

.message-form {
  margin-top: 16px;
}

.message-form input[type="text"],
.message-form textarea {
  display: block;
  flex: 1;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: white;
  font-family: inherit;
}

.message-form input[type="text"]:disabled,
.message-form textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.message-form button {
  flex: none;
  background-color: var(--vp-c-brand);
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.message-form button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
