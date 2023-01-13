
const contact =["Avo_Yapudjian@hotmail.com", "Beirut, Lebanon"];
const links = ['github', 'personal website'];


export default function Footer(){
    return(
        <footer>
        <div class="ly_footer">
          <div class="ly_footer_inner">
              <div class="bl_footerNav">
                <li class="bl_footerNav_item">
                  <h3 style={{fontWeight: 'lighter'}} class="bl_footerNav_link">About This Project</h3>
                    <h6>This project was an attempt at using Next.js and React.js components in a website, I also used anime.js animation techniques to practice animation libraries.</h6>
                </li>
                <li class="bl_footerNav_item">
                  <h3 style={{fontWeight: 'lighter'}} class="bl_footerNav_link" href="#">Contact Me About This Project</h3>
                  <ul class="bl_footerChildNav">
                    {contact.map((i)=> {return <li key={i}>{i}</li>})}
                  </ul>
                </li>
                <li class="bl_footerNav_item">
                  <h3 style={{ fontWeight: 'lighter'}} class="bl_footerNav_link" href="#">Other Projects</h3>
                  <ul class="bl_footerChildNav">
                    {links.map((i)=> {return <li key={i}>{i}</li>})}
                  </ul>
                </li>
              </div>
          </div>
        </div>


            <div class="ly_footer hp_btGray">
                <div class="ly_footer_inner">
                    <small class="el_footerCopyright">© 2022 made by Avard</small>
                </div>
            </div>

        </footer>
    )
}