import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from '../ui/Button';

const OperationSection = ({handleArithmeticOps, handleClearOps}) => {

    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: () => handleArithmeticOps('+'),
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: () => handleArithmeticOps('-'),
        },
        {
            id: shortid.generate(),
            text: '*',
            onClick: () => handleArithmeticOps('*'),
        },
        {
            id: shortid.generate(),
            text: '/',
            onClick: () => handleArithmeticOps('/'),
        },
        {
            id: shortid.generate(),
            text: '%',
            onClick: () => handleArithmeticOps('%'),
        },
        {
            id: shortid.generate(),
            text: 'Clear',
            onClick: handleClearOps,
        },

    ]

    return (
        <div>
            <p>Operations</p>
                <div style={{display: 'flex', gap:'0.75rem'}}>
                    {operations.map((item)=> <Button key={item.id} text={item.text} onClick={item.onClick}/>)}
                </div>
        </div>
    )
}

OperationSection.propTypes = {
    handleArithmeticOps: PropTypes.func.isRequired,
    handleClearOps: PropTypes.func.isRequired,
}

export default OperationSection;