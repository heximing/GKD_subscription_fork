import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 0,
      name: '分段广告-内部广告',
      activityIds: 'com.lantern.launcher.ui.MainActivityICS',
      rules: [
        {
          matches: [
            '[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]',
            '@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]',
          ],
        },
        'ImageView[id=`com.snda.wifilocating:id/feed_item_sdk_logo`] < LinearLayout + [id=`com.snda.wifilocating:id/feed_item_dislike`]',
      ],
    },
    {
      key: 1,
      name: '全屏广告-"好看"页面广告弹窗',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.lantern.start.main.activity.HomeMainActivity',
          matches: '[vid="interstitial_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/14032794',
        },
      ],
    },
  ],
});
