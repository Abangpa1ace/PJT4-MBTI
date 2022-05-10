import React from 'react'
import styled from 'styled-components'
import s, { media } from '@/styles';
import { RiFileCopyLine, RiKakaoTalkFill, RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { clip } from '@/utils/url';
import useToast from '@/hooks/useToast';

const LinkButtons = () => {
  const url = encodeURI(window.location.href);
  const { toast } = useToast();

  const shareLink = () => {
    clip();
    toast('링크가 복사되었습니다.');
  }

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '지금 우리 MBTI는?',
        description: '파릇파릇하기만 했던 나, 입사후에 무슨 일이?',
        imageUrl: window.location.href + '/asset/img/basic.jpeg',
        link: {
          webUrl : url,
          mobileWebUrl : url,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl : url,
            mobileWebUrl : url,
          },
        },
      ]
    })
  }

  const shareFacebook = () => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
  }

  const shareTwitter = () => {
    const text = '지금 우리 MBTI는?'
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url)
  }
  
  return (
    <ScLinkButtons>
      <button className="clip" onClick={shareLink}>
        <RiFileCopyLine />
      </button>
      <button className="kakao" onClick={shareKakao}>
        <RiKakaoTalkFill />
      </button>
      <button className='facebook' onClick={shareFacebook}>
        <RiFacebookCircleFill />
      </button>
      <button className='twitter' onClick={shareTwitter}>
        <RiTwitterFill />
      </button>
    </ScLinkButtons>
  )
}

const ScLinkButtons = styled.div`
  ${s('flex-center; gap(15); abs; alb(0,60); wf;')}

  > button {
    ${s('flex-center; wh(40); br(50%);')}
    &.clip ${s('bgc(#ff8a73)')}
    &.kakao ${s('bgc(#F7D501)')}
    &.facebook ${s('bgc(#395598)')}
    &.twitter ${s('bgc(#2DB6F7)')}
    svg { ${s('wh(26);')}; fill: #fff; }
    &:hover ${s('o(.7);')}
  }

  @media ${media.ml} {
    ${s('ab(100); gap(10);')}
    > button {
      ${s('wh(32);')}
      svg ${s('wh(20)')}
    }
  }
`

export default LinkButtons