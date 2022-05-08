import React from 'react'
import styled from 'styled-components';
import s, { theme, media } from '@/styles';
import BaseButton from '@/views/components/common/BaseButton';
import useReactRouter from '@/hooks/useReactRouter';
import LinkButtons from '@/views/components/common/LinkButtons';
import useToast from '@/hooks/useToast';

const HomePage: React.FC = () => {
  const { navigate } = useReactRouter()
  const { toast } = useToast();

  return (
    <ScHomePage>
      <section>
        <h2>지금 우리 MBTI는?</h2>
        <div>
          <div className="image-holder">
            <img src="/src/asset/img/intro.jpeg" alt="intro-difference-img" />
          </div>
          <h3>
            <span className="green">파릇파릇</span> 하기만했던 나, 입사후에 <span className="yellow">무슨 일이?!</span>
          </h3>
        </div>
        <BaseButton onClick={() => navigate('/test?phase=a')} color="purple" className="button">테스트 하러 가기</BaseButton>
        <LinkButtons />
      </section>
    </ScHomePage>
  )
}

const ScHomePage = styled.div`
  section ${s('rel;')}
  h2 ${s(`fs(40);`)}
  h3 { ${s('fs(24,28); c(#7c7c7c); tac;')}
    span.green { 
      color: ${theme.green[1]} 
    }
    span.yellow { 
      color: ${theme.yellow[1]} 
    }
  }
  .button ${s('mt(30);')}

  .image-holder { ${s(`w(100%); crop;`)}
    img ${s(`mb(-12%); t-y(-12%);`)}
  }

  @media ${media.ml} {
    h2 ${s('fs(30);')}
    .image-holder ${s('px(20);')}
    h3, h3 > span ${s('fs(18,24);')}
    .button ${s('mt(10);')}
  }
`;

export default HomePage