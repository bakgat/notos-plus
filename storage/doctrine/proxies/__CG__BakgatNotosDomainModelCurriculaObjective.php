<?php

namespace Bakgat\Notos\__CG__\Bakgat\Notos\Domain\Model\Curricula;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Objective extends \Bakgat\Notos\Domain\Model\Curricula\Objective implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array();



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return array('__isInitialized__', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'id', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'structure', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'name', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'code', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'websites', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'parent', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'children', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'levels');
        }

        return array('__isInitialized__', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'id', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'structure', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'name', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'code', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'websites', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'parent', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'children', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Curricula\\Objective' . "\0" . 'levels');
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Objective $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', array());
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', array());
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function id()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'id', array());

        return parent::id();
    }

    /**
     * {@inheritDoc}
     */
    public function setStructure(\Bakgat\Notos\Domain\Model\Curricula\Structure $structure)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setStructure', array($structure));

        return parent::setStructure($structure);
    }

    /**
     * {@inheritDoc}
     */
    public function structure()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'structure', array());

        return parent::structure();
    }

    /**
     * {@inheritDoc}
     */
    public function setName(\Bakgat\Notos\Domain\Model\Identity\Name $name)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setName', array($name));

        return parent::setName($name);
    }

    /**
     * {@inheritDoc}
     */
    public function name()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'name', array());

        return parent::name();
    }

    /**
     * {@inheritDoc}
     */
    public function setCode($code)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCode', array($code));

        return parent::setCode($code);
    }

    /**
     * {@inheritDoc}
     */
    public function code()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'code', array());

        return parent::code();
    }

    /**
     * {@inheritDoc}
     */
    public function getWebsites()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getWebsites', array());

        return parent::getWebsites();
    }

    /**
     * {@inheritDoc}
     */
    public function addWebsite(\Bakgat\Notos\Domain\Model\Location\Website $website)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addWebsite', array($website));

        return parent::addWebsite($website);
    }

    /**
     * {@inheritDoc}
     */
    public function removeWebsite(\Bakgat\Notos\Domain\Model\Location\Website $website)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeWebsite', array($website));

        return parent::removeWebsite($website);
    }

    /**
     * {@inheritDoc}
     */
    public function setParent(\Bakgat\Notos\Domain\Model\Curricula\Objective $parent)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setParent', array($parent));

        return parent::setParent($parent);
    }

    /**
     * {@inheritDoc}
     */
    public function parent()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'parent', array());

        return parent::parent();
    }

    /**
     * {@inheritDoc}
     */
    public function setChildren($children)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setChildren', array($children));

        return parent::setChildren($children);
    }

    /**
     * {@inheritDoc}
     */
    public function children()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'children', array());

        return parent::children();
    }

    /**
     * {@inheritDoc}
     */
    public function addChild(\Bakgat\Notos\Domain\Model\Curricula\Objective $child)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addChild', array($child));

        return parent::addChild($child);
    }

    /**
     * {@inheritDoc}
     */
    public function removeChild(\Bakgat\Notos\Domain\Model\Curricula\Objective $child)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeChild', array($child));

        return parent::removeChild($child);
    }

    /**
     * {@inheritDoc}
     */
    public function setLevels(\Doctrine\Common\Collections\ArrayCollection $levels)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLevels', array($levels));

        return parent::setLevels($levels);
    }

    /**
     * {@inheritDoc}
     */
    public function levels()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'levels', array());

        return parent::levels();
    }

    /**
     * {@inheritDoc}
     */
    public function addLevelForGroup(\Bakgat\Notos\Domain\Model\Identity\Group $group, $level)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLevelForGroup', array($group, $level));

        return parent::addLevelForGroup($group, $level);
    }

    /**
     * {@inheritDoc}
     */
    public function addLevel(\Bakgat\Notos\Domain\Model\Curricula\ObjectiveControlLevel $level)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addLevel', array($level));

        return parent::addLevel($level);
    }

}
