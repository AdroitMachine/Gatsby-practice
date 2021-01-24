import React from 'react'
import Layout from '../components/layout'
import styles from "../components/blog.module.css"
console.log(styles)
const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h3>thi si our blog page</h3>
                <p className={styles.text}>lorem asdfhiaohfi alsdhkf ashfd asdhjfohsdf .
                alkhsdf aohsif sadhf .
                ;haisfdhoihsadfoihaslhfdoihasdfouihasf d
                asdfhos9erwehuisfaduhg oasfhgo iwaklfhwe oi
            </p>
            </div>
        </Layout>
    )
}

export default blog
