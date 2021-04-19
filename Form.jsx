import React,{ useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { saveDate } from '../reducks/posts/operations';
import { Table } from './index';

const PrimaryArea = styled.div`
    padding-top:2em;
    margin: 0 auto;
`;

const FormArea = styled.div`
    padding:4em 0;
`;

const PostNovel = () => {
const dispatch = useDispatch();
const [colors, setColors] = useState([]);

 return(
  <div className="common__sub-contents">
    <div className="common__size">
     <h2>入力フォーム</h2>

     <FormArea>
      <Table colors={colors} setColors={setColors} />

      <PrimaryArea>
        <button onClick={() => dispatch(saveDate({
            colours: colours
        }))}>
           作品を投稿する
        </button>
      </PrimaryArea>
     </FormArea>

    </div>
  </div>
)
}

export default PostNovel;