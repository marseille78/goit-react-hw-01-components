import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--bxsh);
  border: var(--bd);
  padding: 40px 15px 15px;
  font-size: 24px;
  line-height: 1.5;
  font-family: var(--ff);
  max-width: var(--maw);
  margin: var(--sect-margin);
`;
export const Description = styled.div`
  text-align: center;
  padding-bottom: 40px;

  img {
    width: 150px;
    height: 150px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;
    display: block;
    margin: 0 auto 16px;
  }
`;
export const Username = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`;
export const DescItem = styled.p`
  margin: 0 0 8px;
  font-size: 16px;
  color: #aaa;
`;
export const Stats = styled.ul`
  display: flex;
  margin: 0 -15px -15px;
  padding: 0;
  list-style: none;
  background-color: #F3F6F9;

  li {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  li:not(:last-child) {
    border-right: 1px solid #fff;
  }

  span {
    color: #aaa;
    font-size: 16px;

    &:last-child {
      color: #121212;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;
