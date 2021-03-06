import React from 'react';

const ColourBlindness = () => {
    return (
        <>
            <div className="container" style={{marginBottom: '5%', marginTop: '5%'}}>
                <h1 className="section-heading">Colour Blindness</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                        <h4 className="is-black-text" style={{margin: '10px', marginLeft: '0'}}>
                            Never Depend on Color Alone to Convey Critical Information
                        </h4>
                        <p className="is-very-dark-grey-text">
                        Visual elements need to be considered carefully to ensure that accessibility is not lost for users with visual impairments. Such users often access websites with special high-contrast web browsers, screen readers, or by replacing CSS styles with a set of rules designed to remove visual barriers. In order to create a site that provides the greatest degree of access to the visually impaired, consider the following tips. 🎨
                        </p>
                        
                        <a id="dyslexia-link" className="button" href="/comparisons" style={{cursor: "pointer"}}>
                            <span>Comparisons</span>
                        </a>
                        <a id="dyslexia-link" className="button" href="/test" style={{cursor: "pointer", marginLeft: 8}}>
                            <span>Test</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ColourBlindness;