/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {Link} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/balenciaga.jpg"),
          category: "Sneaker",
          categoryTheme: "dark",
          title: "Balenciga triple S Trainer Vàng Xanh Nam, Nữ",
          body:
            "2.050.000đ",
        },
        {
          backgroundImage: require("../images/content-management/vans.jpg"),
          category: "Sneaker",
          categoryTheme: "info",
          title: "Vans - lựa chọn của giới trẻ, phong cách trẻ trung",
          body:
            "600.000đ"
        },
        {
          backgroundImage: require("../images/content-management/LV.jpg"),
          category: "Giày Lười",
          categoryTheme: "royal-blue",
          title: "Giày lười Louis-Vuitton kiểu dáng sang trọng",
          body:
            "1.950.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUVGBcXGBcVGBcVFhcXFxcWFhcWGBcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHSUtLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tKy0rLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABCEAABAwIDBQUEBwcDBQEBAAABAAIRAyEEEjEFBkFRYRMiMkJxUoGRoQcUFiNisfAVM3LB0eHxU4KSNENjorJUJP/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAqEQEAAwABAwMCBQUAAAAAAAAAAQIRAxIhMQQTUUFhFCIyQvAFI1Jxkf/aAAwDAQACEQMRAD8AtjHDOB5Ik8g5QW1d4G02uDTNSSAeTeCr9TbVR+ZlOYcZhok+lk52fuXjMRcN7Me1UkfLVeW3JM9qv0PD/TuPh/ueotH+lS2rtDUkyT8ykNgbCxONfloMJGhdoxvqf5LT9kfRDTFTPiqpqR5G91vv4laLgsFRw7Aym1tNjeAAAXalIiHg9Z663Nft4jw8+47YT8LWOHLc1UR4QTMi0BW3Ye4Di0VsbU7FmuWRmjqdArjtnbmGp1TUpsbUrEZc8aAaCfeqVt3adTESKjiQQbaAcrLUy8K14fa2Dwgy4SiCfb4n/cblMsbvZWfxDRyH9VRcHtMNaQ85S2xlLVtoGzRq7QrMw12SW0tqueCC4k+XnKLgmvcWGIDfFPFRODxbDVAqGMvHqrWMRhmhodUku4SvNzck17Vh6uDhi8dVpNqtWDDQXfNRO1S4nI4XI0FypzE7Rw7LAj5KBxW8FJr7Zb6u4+i8lZva249dopWM0ns7dxo79a/JvD3rm0MBSeYAA/hsmOM3lp+2SmH2oY02aSu0U5ZnZ8uHVw1jIzF13XwtCgx7X08xd5z4vQckpiRTaTBkcJWe4jeyu7wAN9LlR1bFYipJc51tbwt/hr2nbSn4qlYysLntbeOnSIAIdzhQGP3le4xTbBPvKrOQl0dQrZs/BNbwEtEzzXevBSrzX9Re32NMFs6tVfNUkAXI4qzMrBvfHhIyj1TbtrB/F1j6Kf2VuhTxAD6mIcymPK2NfUrrjki6WKDRkLgDMzKl9nY2pWf/APzUzVIEGPCD1cbBWXCbj7KpyXg1CNTUeT8phT2Er4LDA06HZ0xGYtbAnrZO6Kdh/o0fXf2uNqx/46fAcsxV22Nu5h8O3JRYGjiR4j6nVR2L3soNjvEyJsoTEb7O8jYtefkpitCYGsFoCYbR2pTYLvA4+5Zdjd7KrvFUi0WUBi9tEgXLuF1RpuP3vpN8MuMSPVVfbG+tSLENERA1noqNjtpvh0WtYqE2dinvqy8yVU3Fp+1Vf2nIJPKEFBt9La2AojuGmB+AD+SbYrfiiPA1zvkPmsq2xh34JocXZwbFvmb19EfY+I+sUzUZZoOU5ufJMWZ2e8rtjd9qzvAGtHW6g8ZtqrV/ePJ6AwPgEwfRAME97iOnNB2LptcXNHcy5b+0g4/EXjRJYkhrczjA/NRVYucMvmJkeiQxGYlpJJawQRyQ1X9sYnPWPsiI/upylVls+yBlTDEbIc8yIGbRSVTDkBoAuzVWWSdSnmDZ83iTSrsYlxh7gBopvB4fzEWfYeqeswJtT8zbn0UaUjH7OqMaHufMmIvKQ2Zs59ckNIEcSrbvFhZp9pwJj4cUz3Rw2ZlQDxTPoAr9Gc7oo7AIbLn3nQBL09k02uGrhF55qbxDZfm9mxQGBMZSPHcdFO6optAAGBB8q5Up6f8AspgYbjH7vVHGC6fvNOiYKtT2a8ukDUyFYm0zDeY8Sf0MFw407+qeMw/njx2hUQ7gMxPlIt6plW2/Uw5FOJBOY3VkOzv+37N5TXFbFZVio9sxaEEFi96+0Zl7zS53e9E5wW0aflJJNjMkwn1fdxjTkawXEykqWyCBmAjLb1Q7iu2hy04pu/EOM/i8Kk/2QQQ327+iK7Ba/wDj+aghnNJj8OqAZcng6wUocNEGPHr0QGE1b7Fwgg8ThiWlnFI7I2e9jxUPh0ViNCwfxNk4p4O+ThEqiN7M8kFJ9kggl98WNqUe2BEkxHQKI3ALTSq0iQO9nv00/JRVTEg2JTftGt0t6LWJqbx+Mmoak3Hd/kj9i2BTzCHd6Z96rVSoOaSdUHNMNWiW3fImnaJ1XDTZYZh95c30VVNQc1ztBzTDVxpU2X7zfu9L6pUCnDXZm/eGDfSVRzVHNEdV6phrRqdOlm7PO2GDM0yNUoMRTy9rnbmJykSNJhZmavVENXqmGtPq4XD1Hdi57cgGYX4lI4LCYahRc6m5odmM965GizI1Oq5n6qYa0BrKXahpe3K65vxT3PSyuOduZlhfgswL1ztEw1pjn0QW99sP8V1wVqPeHaN7nhus0zrocria0xmMowx3aNl1nXTlmNw+ZzTVZAEtvxWV50M6Ya1L9p0MjXdq3NMG/BLDH4bPl7VmUideKyfMhnTDWrftKhkLu1bmBgX4Ix2nhg9o7RmUi9+KyjOuZwmGtRO1MPlf962Qe76JOptDDSwio2D4rrMsy4XJhrRnY3Dy8do38N03dtOhDT2gnzLPy5FJTDWiftXDBzvvG5SLeqT/AG1h8g+8GYH5LPSUWUw1pv7ewnthBZiuphqcNRJl6tw3VMaePwI32SOkXZd3onUuKYSiEq6HdXzeV1m+qL9j3eCO+Ln0TTFLKEK5/ZQePyae/wDyujc0+DzG49E0xSSuQrx9kx447rbO9Udu558Md512+immKEQikLQhulxjwWejfZHp4/CmmM6hDKtHG6PS7PEujdQWMWf4fVNMZvl6IZFo53R1bHeZc+i4d1W2dHddYeqaYznKuQtF+x+rPML+5E+yzbPju6H1TTGfAIQtDG6FyyO8bj0XPsuIzxZtnJpjPYKEFaL9k4OWPHdvRcG61iY/d+JNMZ3BXL8lox3XEgxZ+iId1dWxdlz6Jp0s8vyRTPJaE7dsWfFnWRfsrcsi+vuTTpZ9fkimVfnbtiA+LCxQ+y/eyx4hITTFAIPJcynkr99m7Ex4NUY7tiQYs/RNMZ9lKC0L7IHouppjSBRBcW/6N29UUWaKkXqEBw5f4RiDla3ztMv6jijmoM5f/wBsiByzKKZ7RqUqLSKhDadMZwevAKE2FvUzE1KjmMILABJ4g20+aU3zA+qFjz3s7SJ4iZHyVO3E2xTw2Je2v3WP0cdJ6rpFPy6xNvzY076s2RS8rhmnry+KRxGKaxprOIBYcl+ISQxjTTdle0ucZYQRpwVP+kDazXU2Mpm/mhSleqcW1sjV6FJvdZq2r3ieuvzRvad5qVh1CgN1doB+GDcwzkAMvcRaPcp3tR3DwZ+8/v8Amsz2agr2Y7o4VfF6oZPFzpeHr+tEnTreL8fg/XzSgMho4s8fVQcizXf6ni6IdkJLODLtRw4S4+V/h9UQg5Q3zMMu6hAmTYP4vs7oi1WtaSxxAa0ZmnqlDUGYu8rhA9VUt+sa5lFtEGHl0k8YUmchaxEz3WSnXDmCq0yZymOUwlOxGbs/KRm96ru4zKjaTq1Y92qTA5cAfeu43enDMBpds01A7ymeOk6dEIiZ8J+TlNTztMe5H7IZgzyvEn1VLo72hlUvcS9sRlsADwUtu1t7612tPLlIILTM2M290fNInW78U1TZFnHzMs3qF0sEt5VPEumqJa/gyzvVdjxN41Lt6KuZPs/EPY8CI7RruL7OSrjZv/j8SKXXJ4VPCgSNIS5nlAlvqmG0MV2dLtfPpCd1TDQDrTMuPRRe1XtqEkEZUDfd7aBrF7KjcoFx1UkX90u87TA9FW6/ec00+69seh6KWNdxcHRoIIHPmpq4U2rixSaMt8+o6omxsX21Ik2cwkD3KNrYd7sxeYiSAmm721BTyseDZziTwMlNJjFl+tP5fJBOP2i3kggkqeMsa/E9yPfCa7R2jRojsnvERn6zrHxUHit4GMcA2TLbNHtc1Sdp4PEPqS5paXXEmSQutKdUud79MalNq7UrYmoTUEAWaOEc/VcfhWFveaClcFThsO15FOMBh2PrMY9+RjnAOPIL6MVitXzZva1vKKGFa3wCD6kJCrhST+it32fuxg6YEUmu6u7xPvKk24eiBApt9zQvJPqKxPar1RwXzvZ54weGrio11Fjy4GRlBV9q4p7Gt7QFrq1ng8DC0PEdm0EhoHwCzvezeGk+aVNoefa4A9DzXLk5fc+jrxcft/XR8Pip7s/udOqlaOJkB/8Aq2I5KmYeuRlHmHj6hWDZ+LEunwOHd9ei4u6dDL9nwp94FJVcRDe1Pms7oElSqHKG+dpl3UJpt3GhlOo8Xa5uUfxFDFS23vtBdRotkNMtdx9w9VAsrOrHtKri8nnwSeEwJYS55mePLonNZo4WXOZ1o22/vJWbRGFpuIa7UDWPZB6lVcYAiS6wGvQ6x6qVpUM1V1QmSbM5AACX/wBE0xtZpIbo1vz/AMrpDpNIiNkoK8NA6BXPcGuGU6tWe8HNAHMQZ/NZ66qSVqeydisoMY5puWgmTxIBUveK+UnbR2WBmIGYMm1S7vVO6daQTxpWb1VUoVSMzfM8y3opjCYq7TwbZ6rkmCfD/wCXxJN0d4cKd2ojH2cPb8HRHxGDzsaC4tI1I4qTMQRCExGNLhmc097UDW2kpg+hmMgQOqlalINdDrnh1UpR3aqVGZiRTnQEST68lnqaxWKFINMRJOhF/kpSjsPEuEtpu98D5JXZGxsXSxTD2YLQbunuxz9VogqJKazHF7uYpwg0nR0I/qo47q4gkAUSL8YWvHE9EjWxwAuFJ08s3+z+I9lBXj9s0+nxCCx12b6PsxvBggOkXd8QFM7J2bWrvhrS88+Dfer9szcbC07vLqh/EbfAKyU+zpNhjQ0DgLL6Ec1afoh4p4pv+qVY2PuNTbD8RD3ez5R681JO3VwRcHGi23w944p3jtq02CXva0dSqjtrfym0FtEZ3fABcLct5nddY4qxGYvb8oFrAKtbx7y0qTS0VAHR5bkLOdo724msTL8rCIAba/qoJ7XEXkvmSTrCw2X3v36xVdoZPZscNG6n1K5sWoX02A6sGb1UJtjBOqFpYJGnvU1szDuZSawiHg3/AIVreyZ3STatu09vuxyT2jVygN4MuDzPJM2AZp8kW/iUjsmpREU6zHZheeBC53mYjs6UiJ8lau3nhxcwAOIi/JRnZ16sABzoOnlurNhsThQSAGCOf90ntPeWhREDvOOjWCT7+AXLqtLpFIRv7CDWl9d7WMAk3gAdSVW9uvw5LRRP3YnMXSM+kC/l19eo1c7b2oa7wKzLUz+7D5aHc3EeJw+A66quY/Al9TMSXU44WLCdMw5dfyXSnHMd5dIyPEdxMRX8RaQ4kAADWBJVec8lO8RhHMkiYF/QJIlnidJJ4Cy7Q48lrTPclSdBVy2DiH1e457skk31g6CeAVRGIA8LAOup+asO720Bkczi688ZUmGa/ELQx8Au407N6hWrdDZgrsf3hObvCbqoGqJa7yts5Gwtd9NxLC5r3+EtMWWZZhrtDYMRLgPRO6GyaTPxHqsup7exVnCs/uA5pgj4KEw/0l45z8k07kgHKfjqs9JMtkdsyi2r2roLvKODf7ptjNv0WujOJ+PyCynaW9lcNIfUJLjcNt7hF1VcXtV0y54P4A4j4uH5BIq7xxxEbaXojB7XouEiqw87i3qDomW0d7MLT8VVs9L/AJLB8Hj3HvF7gOLQO71F7xCdPbfNwNh6qzEszWte/mF6259KtJpy0GlzpiTYKDx29uJryTDGjgOKpI2PUNThrPuVioi4dHdFvenRCe7P7YiP58l/rDvaPxQQ7PognTCe5f8Ayn/qe2pt3G0WVCyt+7E3AMyq9snfHG13OFSqS2NAAIJ42V2ODLmBpEvnvA8W/wCER2yaQeXNY0MIgkDzLTCoVC+o7s3OLovJJKT7IwakfhhWNuwSAR/3CZHVv+EpUwTcwd5AId0cgrbcHcU+HilHFMwanEd2FMnAHKW+cmW+iUbhm5g7yAQ/o5ERFHAXFP8A3z84TtjT+9j8BHylP2YQ5SPOTLf4f8J2yg3MD/24h3RyKj6WCv2XDxA/yTmlSt2sXHdj5JLG7TpUWQ581J7oZ3iRytpZVfeDep9Rwo0x2QeQ3KD3jNu8fKP1dGoqPvXRDq1NlJ4IEl2WTBm4kWTNzC20X6XR20+zcxoBPAnpF55XCU2lSzMMGHcD15e9V3rWKmFbE5InT5/BHFWDbXommFwYd3iSXNMOngenA6KSZRmwHrP6/XJFjZJMpNIkCH8AIyu6XNvdb0URjtllxloyv4sNvhMQfkVPObHUpF7Gu1sRo4aj1HmHRC0b2lUKlMtMOBBHA2KNQrFpkKyYptgKrGvbwdz/AITqPSyYP2ZRd4Xupnk4Zh8Rf81XKeGfNe6S2VtwEZH6HXmrNhcrxna4Es8I4keioDti1R4Cx/8AC4A/B0J3hKWKZ5He4tP5FZmDpmfMS0WnhdB/q69FV9p7Io4Z5cJLgTlHr04m6VwO26zR94QB+Ign3AXlR+O2gKj87pceEGIjj62+aOleHJ2TLEPI7zs2c2iPCPndRjqZ173y/opOpSJuR8Xf0KJ2I/D/AMnKraui7Fw5fUAh2skzoPTl/VWn6lct4NuEjuZhGxVd3SXEMGXgfFc/D4KwHB2DfMy7vRSXC3nEM2gQA/ibR0TluCv2fAiVJCkJLvI4QPVdGGOXL5wZ9yMozsSgpiW8kEE8Kmtbi3uEfKUb6uLUeD+/PXWPilARmafIB3/XquBphzfM4zTPTgiGuLxjGDtXuDSzuAE3d6Diq/W3how5jGOc1xkk92/HnA9VEbxY/tMS4EgZCGDhp16ymRq9Ij3x0NlJe7h9NWY2ydfvES5p7MAtEAkzbjylN37XeQ5oygPMm3H1KiI5D4R+gugjn6/rj/hHeOHjj9qSdtWrmBzkECAbWHS0KN2jSdXAzVHgAk911iTrYGCeqBMm2vH3JZtQR+uqQnJFYr2gywDAKkAzlbFzJmRM/BNMdSH1tjjyBHqFJtYGElrQC4y4zy/wbJptEwabjOpHTT+2vVaeaY8b8nz38AkshPX5fP8AXUJdjQRPNKEI0iMbNN4fbI6zuU8Cedre5PmvBEhGxNEOaWuEgiCojAVTTcabuF5PEHQozvfEi9qI5qckJvUKBFx1GoOoOn66pjWoxcXHzaP56RPxT4hEIQ8eEYaXQ8OP64ojnRqnL6euUGRoBEE625cU3qiwPu9OkfFG4nSTn3Qpu5n9f0R2Ycm9gObiGz8dfcjik3if+I/m6I90okx8nWHqj8I9RJ10v7kt2vJx/wBrf6SmgqgXa0NPMy4+6YHyR241+hII/hb+cIzN4hbtznNLKgc4y1zS3NaXEGwsJs0qwuEZXcalndFmGKxDi2ziCIIIgQRpold19q1BiaeZ7nZ3ZDmcXA5+6NTwJB9yTDhbJlpJoCTT4MuOq4HWFXie6R0R3NsG+Zhl3ojZhmzeRwhvqowH1FvNBI/Vai6gmKTwQOVbxdCnuAoh9VrCY7NzQ08wSAf6KvbNxg70+Gp4OhUtSqkdnHioua98cWtcCfXQqorv0m7rvoV3YmmCaNUy7WGOIgg8gdQqXTd6e+YXpp7GuBa4BwNiCJBHIgqibwfRnRqS7Cu7B2uQjNSJ6DVvut0THp4fU5HTZlAJ4gR6f0/nyRXN4a6aa81dcV9GOLZ4HUn9AYN9fE0D5pg7cXHg/wDTE+lSkR/9TdTHq9/jmPKsgSCZJ9/65p1Tp2Hopc7lY+P+md6ZqenrmTvC7i44w40YmRBeyRpwzHkkMcnJTIyYQACY7aoF1Ixq0hwjWyvDdwsafIwetRv8kB9GmKf4qlFuYEC7ncDybbX8lXC16zHlScHXhve/Lp8/VOy+E421udi8JTD3ta5jbOfSJc0AaEggGBrOiiG15H6PzRqbRPeDmpUTM4N9Uns2Oe9oloYHEgXmQOBg/BdzrctwaVNuBoGmIL2Fzy0Xc+SHZjxIMgeirne2Qxmls3EhjT9XrQ4W+7fbWxEW0RKuzq7f3lGoz+Jjh+YXo0e/Ucei5FuOnrH9yox7/wBnmnKOaI4cBc8gvRG0Ng4Wt+9oUnHUktAcByzC6qO1/otw9Rp7GpUonxQYqMN9Do4jpmRqOav1ZBVexupzHkw2E836fCU1rYhztAGjpr/yPePBXba30Z42jem1tcCL0z3h/tdB+Eqm4nCPY4tqNcxw1a4Frh7jdXGvc3waALqULISbiqyKSk3OXSiORmSlIpBriyoHDUODh6gz/JGD1ylRNSqym3V7mtHq4gD80llrVCnUuSDmcLpXC4d5pnMCA0yJ6K1VKrdABZNK/esV54s69MK5+0X8kFO/VGclxOtOn7KXha0OyTZl2nqE5qb05TLGy8iHk6dAIVexNTKXMHtOv7zZNCV2cGybsb9U8QaVN2ZtdxyloEtP4g70EkeqvAK80YLHOo1WVaZhzHBwPUcPQ6e9brujvPTxtHOO7UFn05u1wi45tMiDHTVVJWI/r+SH9ehSef8AX6/ogKmnv4X+WnwRBp/lw6/mgXdRy04/0CIHi3pwP5AopfPtCRFoMenMoDZp0OvTgNfiiFxPtX73AQBo33otSpYzmE2N2jKPjqU3rV2yQcsmJDnz3WniBoeigNVAMhwb3gGuDnWkizI0iLlZrvN9HZP3uCM6k0jIGpuwkwB+E/0WhHEA6OaJzeBhce9cGY1AEe9KscTwqHXk0d4f2A+JRqJmPDz1i8JVpGKtN9M8ngt/PVal9EeMe7D1aRa8tY4Fh0aQ+S5oOkgtn/cr1TPMCNYMH3/ml33ERbkq1bk2MwWPwjWbn5nqjR04yBP/ALFIOYfYbcyZNoGh01XCTclljYQe86OfRRzLnQ6wL/xHkukcOLuXAJuK0XLXSNGjvRfUnRHbXFhILj7zHKyoVcdT1ACa7T2bRrtc2tSZUH42h0eh1CdWmNAOa4TZx58kFF2t9FmDqn7k1KBInuntGf8AF9/g5UraX0UYxpJovpVmidSaTrdHW+a3CL+70SLm90N5m8j5SjXXLzfitzdoUwS7B1oHFrc4/wDSZULWwdVph9N7TycxzT8CF6ne2bXDGeydSOCRq1Xa5i0us0ObOUcyU063m7Zm6uMrmKWHqn8RaWN/5OgKyUtwsVhGHFPLQ+lDmtZ3yGwQ55J5TpB4ngtlq4gnWtzs0ezY/FIikDIglrhDi7i0gSPePyROqWM/aDE/6rvl/RSWw953tqAV3l1N0AmLs621HRMt7NinC1y0D7t8upHXuE+GeYNvgeKhZWZrDUWn5bH9Ywn/AOql/wAggsclBZ9uF9yTraDYq1B+N3/0U1IKkdrtivVH43//AEU0yrbJo8I+A2jVoVBUovLHjRw5cQeYPIpd1JIuwyo1XdX6TKVXLTxUUqpIaHCezeT6eC/A2uL8Fbdp7UFISQeV4GvKba9F51qYYpdm1cWyQzEVgDr944jlxNiiPRtPEhzA4Hy2vxNuYRahi8eARp5j/sPRYpuhv7VwdI0atN1ZheXh2cio2YltwQ4EibkalW7D/STg3NzvLqZDictRgJzEd09wE5RzUF2cANRZtzYd5x4fu/VJufE5nC0F3fiXWyhvc0EaKCob2YUgOZXpm3c7xZJOtTxdTayf0dpscWtZUBaO84tqSMx/ibB42MoHbn6y4Eht/vXEZn62AuOiVD2yfBq3zOcTIiAeJ5u0GiZDEucxzvvO84RdhkTwkZjppACjNv7Yex5aHFjRlLnOLBpw7nhbpIn1UFqpkcOzm7bTdw09wCcU6ot3gZmI4xqUxwOKFSm2o2oHNeAQ5kVAYtDS3W4TntPxNGhMgjK3lPNVC1amDqAQfFJjuhI9mbHJB5h3hb06pzTILTIBmYEzbmmxbzZrJMHl4QgKRAIAqNB0Au53Um8I8y4AEG3hbY+pdzRKh8U5xIGYi5J4MainENkjMw5WzlnKBrcnieaA7X5czhI6NBfPK6BrFrRIDjqDmAJHG3oiEWY24GvJgjkBcg3SZqCS/uwDlbH3ZDrjqboHn1puYCZJFgQR/JGDx3RpBvxAURVJGvjfrnBcKZy6yTpbkkO0gHK7K0GHuaQZd3YIaQLFNXE64SDoe96JOqDe7mlxyjiABxUO/ajm+No5ZRLHAyYcZluUxrKL9o6Y1c5p72ozCfNdvLmqmJBzyfC9l7C0Hu3JhIveDdz5BuAORIj4Eapmdt0nXa6i641MENGvvKSq7YYy5NJoBnWe4RAiOM3PBExF/SJg21MG6oW9+mWllu8BID/dB+QWSq/bz75UXUqlGmTWc9pYX2DRwJtxsDb3ws/RYdXUVBRUttf9/U/iKaBOttSKzswvDCfUsbPzTIORSzUoAkWpVqA2QJN9EJZpXSUDU4URokKmAbyUkFwhBD1NmNPBdw+DNMOFNzmZhDshLZjSY1UoWouRBGso1WiG1qwGtqjxf4pDGYepUtUq1XjWHvc4fAmFMZEUsRMG3e2vjcEwtw1aGEzkcA5sniAbj3FT+C+kvHMEVaNKqM093NT9ZuZUKxqN2aKvTfpPw3Zh9WlUD3nK5obmcxvGCO6W++b6Kawe++AqMNQVwxoLZzuyOaBpLSZ16QsrfQBGiQfg2kRCDZKO9GEfAp4um4n2ajHeK5MEza0KH2xvLQoFtSvWDWTESHHQDwMlzuMwsmrbIYeATKtshpMwiPRtPEMewVKTg5lRrYex9iw+vG5tZMKu3MODetS7pDA1zqZkkt7xyusR1Xn/APZ72A5HOaDqGkifUBR1XBPn+yq9vq9CV94sI2QcTR075FQtNSxGUAG3BReK3ywcgnFUpg5YdnawQ2zu4Q42WFOoVOfySbqFTmmGw2Kvv1gJIFZ0Xkhj8z7zEhlm3IhQG0d+qBByiq8m1gGtDR5RmM/Lms6OGfzXPqTkxNWfF74knuUmt4AvcXH4ABQ+K2vVq2c4xpAs34DX3pqzZzk9w+zeauJpxs82T4IlHDwnLWKBNBLZUEAlvtN+KMKjPbb8VA5kMyKsArs9tq79aZ7QVczLuZFWP64z2gh9dZ7QVczLhcmIsn19ntBcOPZ7QVczLmZMNWP68z2gh9ep+0FXMyGZBYTjme0ufX6ftKvEoShqxjadPmjftanzVYlCUNWk7Yp8/ki/tanz+Sq5KEoas52rT5/JE/aFLmq3K5KCyu2hS9r5JF2KonzKAlclBOGtR9r5IhfR9r5KGlcREwXUfa+S6KlH2vkoaUJQTgr0va+RRhiaXtfIqBlclBYBjKXtfIo4xtL2/kVXJQlBZPrlL2x8Cgq5mQQLoFdQRRQuldQQcQQQUAReS6gqOIIIIjoXEEEUVBBBEFKCCCDq4UEEAK4V1BBxcC6gg4ggggC4uoIOIIIIAgggg//Z",
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        }
      ] 
    };
  }

  render() {
    const {
      PostsListOne
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4 bg">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Danh Sách Sản Phẩm" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <hr></hr>
                  <p className="card-text d-inline-block mb-3">Price : {post.body}</p>
                  <br></br>
                  <Link to="shoe-infor"><button type="button" className="btn btn-primary">Chi Tiết</button></Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Second Row of Posts */}
      </Container>
    );
  }
}

export default BlogPosts;
