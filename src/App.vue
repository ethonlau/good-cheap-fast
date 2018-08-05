<template>
  <div id="app">
    <div class="item-group">
      <a :class="[ 'item', { 'active': item.status } ]"
         v-for="(item, index) in list"
         @click="switchStatus(index)">
        <span class="switch"></span>
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: [{
        name: 'GOOD',
        status: false
      },
      {
        name: 'CHEAP',
        status: false
      },
      {
        name: 'FAST',
        status: false
      }]
    }
  },
  methods: {
    switchStatus (index) {
      this.list[index].status = !this.list[index].status
      if (this.list[0].status === true && this.list[1].status === true && this.list[2].status === true) {
        if (index === 0) {
          this.list[2].status = false
        } else if (index === 1) {
          this.list[0].status = false
        } else if (index === 2) {
          this.list[1].status = false
        }
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f1fff1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  .item-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .item {
      display: block;
      cursor: pointer;
      width: 240px;
      padding: 20px 0;
      border-radius: 6px;
      font-size: 21px;
      color: green;
      -webkit-user-select: none;

      @media (min-width: 420px) {
        &:hover {
          background-color: white;
        }
      }

      .switch {
        position: relative;
        display: inline-block;
        margin: 0 10px 0 54px;
        width: 40px;
        height: 16px;
        border-radius: 10px;
        background-color: #c3eac3;
        transition: 0.2s;

        &:before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 0;
          margin-top: -10px;
          border-radius: 10px;
          background-color: white; 
          box-shadow: 0 2px 10px #aaa;
          transition: 0.2s;
        }
      }

      &.active .switch {
        background-color: green;

        &:before {
          left: 20px;
        }
      }
    }
  }
}
</style>
