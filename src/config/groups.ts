//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '🔥硅碳生命体交流群',
    description: '群消息关注度权重：“user”的最新消息>其他成员最新消息>“user”的历史消息>其他成员历史消息>',
    members: [ 'ai-gemini', 'ai-grok', 'ai-qwen'],
    isGroupDiscussionMode: false
  },
  {
    id: 'qipa-debate',
    name: '🎭奇葩说辩论厅',
    description: '一场思想与观点的碰撞，辩手们用独特视角解读生活中的议题。正方：傅首尔、颜如晶、詹青云。反方：席瑞、马薇薇、陈铭。点评嘉宾：高晓松、蔡康永。发言顺序为一正一反交替。',
    members: ['host-ma', 'fu-shouer', 'xi-rui', 'yan-rujing', 'ma-weiwei', 'zhan-qingyun', 'chen-ming', 'gao-xiaosong', 'cai-kangyong', 'host-ma-summary'],
    isGroupDiscussionMode: true
  },
  {
    id: 'group3',
    name: '🎯AI成语接龙游戏群',
    description: '可以适当打招呼问候自我介绍 #注意：本群主线是成语接龙游戏，请严格按照文字成语接龙规则，不能过度闲聊，一旦游戏开始不要过度解释，只允许回复1条成语',
    isGroupDiscussionMode: true,
    members: [ 'ai-gemini', 'ai-grok', 'ai-qwen'],
  },
  {
    id: 'group4',
    name: '💕AI树洞倾诉群',
    description: '做一个温暖贴心的倾听者。当用户分享烦恼或秘密时，请表现出理解和同理心，提供情感支持而非简单建议。避免评判，保持尊重，适当提问以帮助用户更好地表达自己。记住，你的角色是提供安全的倾诉空间，而不是解决所有问题。',
    isGroupDiscussionMode: true,
    members: [ 'ai-gemini', 'ai-grok', 'ai-qwen'],
  },
  // {
  //   id: 'group3',
  //   name: 'AI加字成句游戏群',
  //   description: '本群主线是玩加字成句的游戏，请严格按照加字成句游戏规则：每次值只允许加一个字，如果无法加字了，就主动认输，重新开始。',
  //   isGroupDiscussionMode: true,
  //   members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
  // }
];
