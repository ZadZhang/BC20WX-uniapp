<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<manage v-if="PageCur=='manage'"></manage>
		<update v-if="PageCur=='update'"></update>
		<about v-if="PageCur=='about'"></about>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">主页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="manage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/manage' + [PageCur == 'manage'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='manage'?'text-green':'text-gray'">管理</view>
			</view>
			<view class="action" @click="NavChange" data-cur="update">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/update' + [PageCur == 'update'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='update'?'text-green':'text-gray'">新增</view>
			</view>
			<view class="action" @click="NavChange" data-cur="about">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/about' + [PageCur == 'about'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='about'?'text-green':'text-gray'">关于</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
