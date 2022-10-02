import styles from './bio.css'

const Bio = () => {
    return (       
        <div class={styles.container}>

            <div class="title">
                <h1>Biodiversity</h1>
                <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="bio" width="50" height="50"></img>
                
            </div>
            
            <div class="home">
                <input id="theme" type="button" value="Night" onclick="addTheme()" />
                <a href="/">Home</a>
            </div>
        
            <div class ="head"><h2>Topic</h2></div>

            <div class="topic">
                <h3>System of Classification</h3>
                <video width = "200" height = "150" controls>
                    <source src="videos/Classification.mp4" type="video/mp4"></source>
                </video>
                <span class="website"><a href="https://www.sciencelearn.org.nz/resources/1438-classification-system" target="_blank"><span><u>Website</u></span></a></span>
                <h3>Animal Kingdom</h3>
                <video width = "200" height = "150" controls>
                    <source src="videos/kingdom.mp4" type="video/mp4"></source>
                </video>
                <span class="website"><a href="https://www.factmonster.com/dk/encyclopedia/science/animal-kingdom" target="_blank"><span><u>Website</u></span></a></span>
                <h3>Kingdom Protista</h3>
                <video width = "200" height = "150" controls>
                    <source src="videos/protista.mp4" type="video/mp4"></source>
                </video>
                <span class="website"><a href="https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/08%3A_Protists_and_Fungi/8.01%3A_Protist_Kingdom" target="_blank"><span><u>Website</u></span></a></span>
                <h3>Kingdom Fungi</h3>
                <video width = "200" height = "150" controls>
                    <source src="videos/fung.mp4" type="video/mp4"></source>
                </video>
                <span class="website"><a href="https://www.ncbi.nlm.nih.gov/books/NBK559443/" target="_blank"><span><u>Website</u></span></a></span>
            </div>
        </div>
    )
}
export default Bio