import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Projects.module.scss'
import Header from '../components/Header'
import ButtonElement from '../components/ButtonElement'
import ProjectOverviewCard from '../components/Cards/ProjectOverviewCard'
import Footer from '../components/Footer'

function Projects(props) {

    const [projectsData, setProjectsData] = useState(props.data)

    const Project = projectsData.map(project => {
        return(
            <Col xl={4} lg={3} className={styles.projectItem}>
                <ProjectOverviewCard 
                        title={project.name}
                        desc={project.desc}
                        status={project.status}
                        image={project.poster} />
            </Col>
        )
    })

    const handleSearch = (v) => {
        console.log('searching for ', v)
        const newProjectsData = props.data
        let filteredResults = newProjectsData.filter(project => {
            return ((project.name).toLowerCase()).search(v.toLowerCase()) >= 0
        })
        console.log(filteredResults)    
        setProjectsData(projectsData => filteredResults)    
    }

    return(
        <div className={styles.projectsPage}>
            <Header handleSearch={(v) => handleSearch(v)} />
            <Container>
                <div className={styles.projectsHeader}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>Projects</div>
                        <ButtonElement variant="primary" label="Create Project" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.filtersContainer}>
                        <div className={[`${styles.item} ${styles.active}`]}>All</div>
                        <div className={styles.item}>Active</div>
                        <div className={styles.item}>Finished</div>
                        <div className={styles.item}>Joined</div>
                        <div className={styles.item}>Owned</div>
                    </div>
                </div>
                <div className={styles.projectsContainer}>
                    <Row>
                        {Project}
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects