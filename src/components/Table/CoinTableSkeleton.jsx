import Skeleton from "react-loading-skeleton";
import { Filter } from "../../utils/icons";
import {
  CoinTable,
  Container,
  FirstData,
  Flex,
  FlexContainer,
  PercentageBar,
  SkeletonCustom,
  SortBtn,
  Wrapper,
} from "./Table.styled";
import { CoinName } from "./Table.styled";
import { NameContainer } from "./Table.styled";
const CoinTableSkeleton = () => {
  return (
    <Container>
      <CoinTable>
        <thead>
          <tr>
            <th className="display-none">#</th>
            <th>
              <Flex>
                Name
                <SortBtn>
                  <Filter />
                </SortBtn>
              </Flex>
            </th>
            <th>
              <Flex>
                Price
                <SortBtn>
                  <Filter />
                </SortBtn>
              </Flex>
            </th>
            <th>
              <Flex>
                1h%
                <SortBtn>
                  <Filter />
                </SortBtn>
              </Flex>
            </th>
            <th>
              <Flex>
                24h%
                <SortBtn>
                  <Filter />
                </SortBtn>
              </Flex>
            </th>
            <th>
              <Flex>
                7d%
                <SortBtn>
                  <Filter />
                </SortBtn>
              </Flex>
            </th>
            <th>24h Volume/Market Cap</th>
            <th>Circulating/Total Supply</th>
            <th>Last 7d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Skeleton width={15} />
            </td>
            <CoinName>
              <NameContainer>
                <SkeletonCustom
                  width={30}
                  height={30}
                  inline={true}
                  circle={true}
                />
                <p>
                  <Skeleton width={100} />
                </p>
              </NameContainer>
            </CoinName>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Skeleton width={170} height={35} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <Skeleton width={15} />
            </td>
            <CoinName>
              <NameContainer>
                <SkeletonCustom
                  width={30}
                  height={30}
                  inline={true}
                  circle={true}
                />
                <p>
                  <Skeleton width={100} />
                </p>
              </NameContainer>
            </CoinName>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Skeleton width={170} height={35} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <Skeleton width={15} />
            </td>
            <CoinName>
              <NameContainer>
                <SkeletonCustom
                  width={30}
                  height={30}
                  inline={true}
                  circle={true}
                />
                <p>
                  <Skeleton width={100} />
                </p>
              </NameContainer>
            </CoinName>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Skeleton width={50} />
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Wrapper>
                <FlexContainer>
                  <FirstData>
                    <Skeleton
                      width={50}
                      inline={true}
                      style={{ marginRight: 50 }}
                    />
                    <Skeleton width={50} />
                  </FirstData>
                </FlexContainer>
                <PercentageBar>
                  <Skeleton width={150} />
                </PercentageBar>
              </Wrapper>
            </td>
            <td>
              <Skeleton width={170} height={35} />
            </td>
          </tr>
        </tbody>
      </CoinTable>
    </Container>
  );
};
export default CoinTableSkeleton;
