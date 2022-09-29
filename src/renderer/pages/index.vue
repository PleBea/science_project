<template>
  <div class="index">
    <div class="secure">
      <div class="secure_wrapper">
        <div class="title">🔒 암호문</div>
        <button class="title_button" @click="translate">번역</button>
      </div>
      <textarea v-model="secure" cols="30" rows="10" />
    </div>
    <div class="trans">
      <div class="title">📃 전사문</div>
      <br>
      <textarea v-model="trans" readonly cols="30" rows="10" />
    </div>
    <div class="result">
      <div class="title">📖 번역문</div>
      <br>
      <textarea v-model="result" readonly cols="30" rows="10" />
    </div>

    <div class="footer">
      <h1>선린인터넷고등학교</h1>
      <img src="~/assets/sunrin.png">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as Hangul from 'hangul-js'
const word = require('~/assets/word.json')

// A > U
// C > G
// G > C
// T > A

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      secure: '' as string,
      trans: '' as string,
      result: '' as string,
      tmpArr: [] as unknown as string,
      validation (secure: string) {
        const korean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g
        const english = ['A', 'C', 'G', 'T']

        if (!secure) {
          alert('입력해주세요.')
          return false
        } else if (korean.test(secure)) {
          alert('영어만 입력해주세요.')
          return false
        } else {
          for (let i = 0; i < secure.length; i++) {
            if (!english.includes(secure[i])) {
              alert('정확한 DNA 값을 입력해주세요.')
              return false
            }
          }
        }

        return true
      }
    }
  },
  methods: {
    translate () {
      this.secure = this.secure.toUpperCase()
      if (this.validation(this.secure)) {
        const key = {
          A: 'U',
          C: 'G',
          G: 'C',
          T: 'A'
        }
        this.trans = ''

        for (let i = 0; i < this.secure.length; i++) {
          this.trans += key[this.secure[i]]
          if ((i + 1) % 3 === 0) {
            this.trans += ' '
          }
        }

        this.tmpArr = [] as unknown as string
        const tmpArr: string[] = this.trans.split(' ')
        tmpArr.forEach(element => {
          if (!element) { return }
          this.tmpArr += word[element]
        })
        this.result = ''
        this.result = Hangul.assemble([...this.tmpArr])
      }
    }
  }
})
</script>

<style lang="scss">
@import "~/assets/index.scss";
</style>
