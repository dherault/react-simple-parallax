import './App.css';

import { useEffect, useRef, useState} from 'react'

function App() {
  const rootRef = useRefRender()

  return (
    <div ref={rootRef} className="root">
      <Parallax element={rootRef.current}>
        {progress => (
          <div className="square"
            style={{
              top: `${progress * 512}px`
            }}
          />
        )}
      </Parallax>
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
    </div>
  );
}

function useRefRender() {
  const ref = useRef()
  const [,forceRender] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      forceRender(x => !x)
    }, 1)
  }, [])

  return ref
}

function Parallax({ element, children }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!element) return

    function handleScroll() {
      const { scrollTop, scrollHeight, offsetHeight  } = element

      setProgress(scrollTop / (scrollHeight - offsetHeight))
    }

    element.addEventListener('scroll', handleScroll, { passive: true })

    return () => element.removeEventListener('scroll', handleScroll)
  }, [element])

  console.log('progress', progress)

   if (!element) return children(0)


  return children(progress)
}

export default App;
