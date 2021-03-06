<?php

namespace Bakgat\Notos\__CG__\Bakgat\Notos\Domain\Model\Resource;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Asset extends \Bakgat\Notos\Domain\Model\Resource\Asset implements \Doctrine\ORM\Proxy\Proxy
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
            return array('__isInitialized__', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'guid', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'title', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'mime', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'organization', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'path', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'type');
        }

        return array('__isInitialized__', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'guid', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'title', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'mime', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'organization', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'path', '' . "\0" . 'Bakgat\\Notos\\Domain\\Model\\Resource\\Asset' . "\0" . 'type');
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Asset $proxy) {
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
    public function setGuid(\Bakgat\Notos\Domain\Model\Identity\Guid $guid)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setGuid', array($guid));

        return parent::setGuid($guid);
    }

    /**
     * {@inheritDoc}
     */
    public function guid()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'guid', array());

        return parent::guid();
    }

    /**
     * {@inheritDoc}
     */
    public function setTitle($title)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTitle', array($title));

        return parent::setTitle($title);
    }

    /**
     * {@inheritDoc}
     */
    public function title()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'title', array());

        return parent::title();
    }

    /**
     * {@inheritDoc}
     */
    public function setMime($mime)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMime', array($mime));

        return parent::setMime($mime);
    }

    /**
     * {@inheritDoc}
     */
    public function mime()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'mime', array());

        return parent::mime();
    }

    /**
     * {@inheritDoc}
     */
    public function setOrganization($organization)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setOrganization', array($organization));

        return parent::setOrganization($organization);
    }

    /**
     * {@inheritDoc}
     */
    public function organization()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'organization', array());

        return parent::organization();
    }

    /**
     * {@inheritDoc}
     */
    public function setPath($path)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPath', array($path));

        return parent::setPath($path);
    }

    /**
     * {@inheritDoc}
     */
    public function path()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'path', array());

        return parent::path();
    }

    /**
     * {@inheritDoc}
     */
    public function setType($type)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setType', array($type));

        return parent::setType($type);
    }

    /**
     * {@inheritDoc}
     */
    public function type()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'type', array());

        return parent::type();
    }

    /**
     * {@inheritDoc}
     */
    public function webpath()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'webpath', array());

        return parent::webpath();
    }

    /**
     * {@inheritDoc}
     */
    public function thumbpath()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'thumbpath', array());

        return parent::thumbpath();
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
    public function setParent(\Bakgat\Notos\Domain\Model\Resource\Resource $parent)
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
    public function prePersist()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'prePersist', array());

        return parent::prePersist();
    }

    /**
     * {@inheritDoc}
     */
    public function preUpdate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'preUpdate', array());

        return parent::preUpdate();
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreatedAt', array());

        return parent::getCreatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreatedAt(\DateTime $createdAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', array($createdAt));

        return parent::setCreatedAt($createdAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getUpdatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdatedAt', array());

        return parent::getUpdatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdatedAt(\DateTime $updatedAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', array($updatedAt));

        return parent::setUpdatedAt($updatedAt);
    }

}
