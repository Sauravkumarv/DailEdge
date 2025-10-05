// import React, { useState, useEffect } from 'react';
// import { Clock, Calendar, ArrowRight, Sparkles, Share2, Bookmark, ThumbsUp, MessageCircle, Twitter, Linkedin, Facebook } from 'lucide-react';

// // DYNAMIC DATA SOURCE - You can replace this with API calls or import from external files
// const articlesData = {
//   articles: [
//     {
//       id: 1,
//       category: 'AI',
//       title: 'GPT-5 Capabilities Leak: What 47 Early Testers Revealed',
//       excerpt: 'Exclusive insights from closed alpha testing show dramatic improvements in multi-step logic and code generation.',
//       readTime: '4 min',
//       date: '01/02/2025',
//       author: 'Dr. Sarah Mitchell',
//       authorRole: 'AI Research Lead',
//       authorBio: 'Passionate about exploring the intersection of artificial intelligence and human potential. Writing about the latest breakthroughs and their implications for our future.',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
//       content: `
//         <p class="lead">In an unprecedented leak from OpenAI's closed testing program, 47 early testers have shared their experiences with GPT-5, revealing capabilities that could fundamentally reshape how we interact with artificial intelligence.</p>

//         <h2>The Testing Program</h2>
//         <p>The closed alpha testing began in November 2024, with carefully selected researchers, developers, and industry experts granted exclusive access to GPT-5. Under strict non-disclosure agreements, these testers were asked to push the model to its limits across various domains.</p>

//         <p>However, in a coordinated release through anonymous channels, these testers have now shared their findings, providing the first comprehensive look at what many are calling "the most significant AI advancement since GPT-3."</p>

//         <h2>Multi-Step Reasoning Revolution</h2>
//         <p>Perhaps the most striking improvement lies in GPT-5's ability to handle complex, multi-step reasoning tasks. Testers report a 340% improvement in solving mathematical problems that require maintaining context across 15 or more sequential operations.</p>

//         <blockquote>"I gave it a calculus problem that required integration by parts, substitution, and then applying the result to a physics scenario. It not only solved it correctly but explained each step's rationale in a way that would make a tenured professor proud." - Anonymous Tester #23</blockquote>

//         <p>The model demonstrates an almost eerie ability to track multiple threads of logic simultaneously, catching contradictions and maintaining consistency across lengthy problem-solving sequences.</p>

//         <h2>Code Generation Takes a Quantum Leap</h2>
//         <p>For software developers, the implications are staggering. Testers report that GPT-5 can now:</p>

//         <ul>
//           <li>Architect entire codebases from high-level descriptions</li>
//           <li>Understand and apply complex design patterns automatically</li>
//           <li>Debug code by reasoning about program flow and edge cases</li>
//           <li>Refactor legacy code while preserving functionality</li>
//           <li>Generate comprehensive test suites with edge case coverage</li>
//         </ul>

//         <p>One tester shared an example where they described a microservices architecture for an e-commerce platform in plain English. GPT-5 produced not just the code, but also Docker configurations, API documentation, database schemas, and deployment scripts - all coherent and production-ready.</p>

//         <h2>Looking Forward</h2>
//         <p>The leaked insights paint a picture of an AI system that's not just incrementally better but qualitatively different in its approach to problem-solving and communication. As we await official confirmation and broader access, one thing is clear: the AI landscape is about to shift dramatically.</p>
//       `,
//       tags: ['GPT-5', 'Machine Learning', 'Innovation', 'OpenAI'],
//       views: '234K',
//       likes: 1847,
//       comments: 392
//     },
//     {
//       id: 2,
//       category: 'Research',
//       title: 'Neural Networks Achieve Quantum Breakthrough',
//       excerpt: 'Scientists combine quantum computing with deep learning to solve previously impossible optimization problems.',
//       readTime: '6 min',
//       date: '12/29/2024',
//       author: 'Prof. James Chen',
//       authorRole: 'Quantum Computing Researcher',
//       authorBio: 'Leading researcher in quantum computing and machine learning integration. Published over 50 papers in top-tier journals.',
//       image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
//       content: `
//         <p class="lead">In what may be the most significant advancement in computational science this decade, researchers have successfully merged quantum computing with neural networks, creating a hybrid system that solves problems classical computers couldn't touch.</p>

//         <h2>The Breakthrough Moment</h2>
//         <p>The breakthrough came at 3:47 AM on December 15th, 2024, in a laboratory at MIT. Dr. Sarah Chen and her team watched as their Quantum Neural Annealing (QNA) system successfully solved a protein folding simulation in 3.2 hours—a task that would have required 15 years on the world's fastest supercomputers.</p>

//         <p>"We knew we had something special, but when the results came in, there was just stunned silence," Dr. Chen recalls. "Then someone started crying. We'd been working toward this for four years."</p>

//         <h2>Understanding Quantum Neural Annealing</h2>
//         <p>Traditional neural networks process information sequentially, exploring solution spaces one step at a time. Quantum computers, on the other hand, leverage superposition to evaluate multiple possibilities simultaneously. QNA bridges these worlds.</p>

//         <blockquote>"We're not replacing one with the other. We're creating a symbiotic relationship where quantum and classical computing amplify each other's strengths." - Dr. Sarah Chen</blockquote>

//         <h2>Real-World Applications</h2>
//         <p><strong>Drug Discovery Revolution:</strong> Pharmaceutical companies are already lining up. Pfizer's early trials using QNA reduced drug candidate screening time from 18 months to 6 weeks.</p>

//         <p><strong>Climate Modeling:</strong> The system can model complex weather patterns at resolutions previously impossible, potentially improving long-term climate predictions by an order of magnitude.</p>

//         <h2>The Path Forward</h2>
//         <p>This breakthrough represents more than technical achievement. It's a proof of concept that hybrid quantum-classical systems can solve real-world problems today, not in some distant future.</p>
//       `,
//       tags: ['Quantum Computing', 'Neural Networks', 'Research', 'Breakthrough'],
//       views: '189K',
//       likes: 1523,
//       comments: 267
//     },
//     {
//       id: 3,
//       category: 'Industry',
//       title: 'AI Agents Transform Enterprise Workflows',
//       excerpt: 'Fortune 500 companies report 70% productivity gains after deploying autonomous AI agents in daily operations.',
//       readTime: '5 min',
//       date: '01/05/2025',
//       author: 'Emily Rodriguez',
//       authorRole: 'Technology Analyst',
//       authorBio: 'Enterprise technology specialist focusing on AI adoption and digital transformation strategies.',
//       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
//       content: `
//         <p class="lead">The AI agent revolution isn't coming—it's already here. Fortune 500 companies are quietly deploying autonomous AI agents that are transforming enterprise operations in ways that seemed impossible just 18 months ago.</p>

//         <h2>The Silent Revolution</h2>
//         <p>While headlines focus on chatbots and image generators, enterprise AI agents have been operating behind the scenes, orchestrating complex workflows, making decisions, and collaborating with each other to solve problems that span entire organizations.</p>

//         <h2>Microsoft's Internal Transformation</h2>
//         <p>Microsoft's sales organization provides a compelling case study. In Q3 2024, they deployed AI agents across their global sales team of 15,000 people. The results exceeded even optimistic projections:</p>

//         <ul>
//           <li>73% reduction in administrative task time</li>
//           <li>$2.4 billion increase in quarterly revenue</li>
//           <li>45% improvement in customer satisfaction scores</li>
//           <li>61% faster response time to customer inquiries</li>
//         </ul>

//         <blockquote>"We're not just automating tasks anymore. We're augmenting human decision-making at every level of the organization." - Enterprise CTO</blockquote>

//         <h2>The Economic Impact</h2>
//         <p>McKinsey estimates AI agents could generate $4.4 trillion in annual value across enterprises globally. Early adopters are already seeing average ROI of 340% within 18 months.</p>
//       `,
//       tags: ['AI Agents', 'Enterprise', 'Productivity', 'Automation'],
//       views: '312K',
//       likes: 2134,
//       comments: 501
//     }
//   ],
//   categories: ['all', 'AI', 'Research', 'Industry', 'Ethics']
// };

// export default function AIArticlesHub() {
//   const [articles, setArticles] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [liked, setLiked] = useState({});
//   const [bookmarked, setBookmarked] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       try {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setArticles(articlesData.articles);
//         setCategories(articlesData.categories);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticles();
//   }, []);

//   const filteredArticles = filter === 'all' 
//     ? articles 
//     : articles.filter(article => article.category === filter);

//   const handleLike = (articleId) => {
//     setLiked(prev => ({ ...prev, [articleId]: !prev[articleId] }));
//   };

//   const handleBookmark = (articleId) => {
//     setBookmarked(prev => ({ ...prev, [articleId]: !prev[articleId] }));
//   };

//   const articleContentStyles = {
//     color: '#374151',
//     lineHeight: '1.8'
//   };

//   const leadStyles = {
//     fontSize: '1.25rem',
//     fontWeight: '500',
//     color: '#4B5563',
//     marginBottom: '2rem',
//     lineHeight: '1.75'
//   };

//   const h2Styles = {
//     fontSize: '1.875rem',
//     fontWeight: '700',
//     color: '#111827',
//     marginTop: '3rem',
//     marginBottom: '1.5rem',
//     lineHeight: '1.3'
//   };

//   const paragraphStyles = {
//     marginBottom: '1.5rem',
//     fontSize: '1.125rem'
//   };

//   const listStyles = {
//     marginBottom: '1.5rem',
//     paddingLeft: '2rem'
//   };

//   const listItemStyles = {
//     marginBottom: '0.75rem',
//     fontSize: '1.125rem',
//     lineHeight: '1.75'
//   };

//   const blockquoteStyles = {
//     borderLeft: '4px solid #9333EA',
//     paddingLeft: '1.5rem',
//     margin: '2rem 0',
//     fontStyle: 'italic',
//     color: '#6B7280',
//     background: '#F9FAFB',
//     padding: '1.5rem',
//     borderRadius: '0.5rem'
//   };

//   if (loading) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             width: '64px',
//             height: '64px',
//             border: '4px solid #a855f7',
//             borderTopColor: 'transparent',
//             borderRadius: '50%',
//             margin: '0 auto 16px',
//             animation: 'spin 1s linear infinite'
//           }}></div>
//           <p style={{ color: 'white', fontSize: '1.125rem' }}>Loading articles...</p>
//         </div>
//         <style>{`
//           @keyframes spin {
//             to { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   if (selectedArticle) {
//     return (
//       <div style={{ minHeight: '100vh', background: 'white' }}>
//         {/* Article Header */}
//         <div style={{ position: 'relative', height: '60vh', minHeight: '500px', overflow: 'hidden' }}>
//           <img 
//             src={selectedArticle.image} 
//             alt={selectedArticle.title}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//           <div style={{
//             position: 'absolute',
//             inset: 0,
//             background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)'
//           }}></div>
          
//           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
//             <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px 64px', width: '100%' }}>
//               <button
//                 onClick={() => setSelectedArticle(null)}
//                 style={{
//                   marginBottom: '32px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   color: 'rgba(255,255,255,0.8)',
//                   background: 'none',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500'
//                 }}
//               >
//                 <ArrowRight style={{ transform: 'rotate(180deg)' }} size={20} />
//                 Back to Articles
//               </button>
              
//               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
//                 <span style={{
//                   padding: '6px 16px',
//                   background: '#a855f7',
//                   color: 'white',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   borderRadius: '9999px'
//                 }}>
//                   {selectedArticle.category}
//                 </span>
//                 <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>•</span>
//                 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{selectedArticle.views} views</span>
//               </div>
              
//               <h1 style={{
//                 fontSize: '3.75rem',
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginBottom: '24px',
//                 lineHeight: '1.1'
//               }}>
//                 {selectedArticle.title}
//               </h1>
              
//               <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.8)' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <div style={{
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '50%',
//                     background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     fontWeight: 'bold'
//                   }}>
//                     {selectedArticle.author.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: '600', color: 'white' }}>{selectedArticle.author}</div>
//                     <div style={{ fontSize: '14px' }}>{selectedArticle.authorRole}</div>
//                   </div>
//                 </div>
//                 <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <Calendar size={16} />
//                   <span style={{ fontSize: '14px' }}>{selectedArticle.date}</span>
//                 </div>
//                 <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <Clock size={16} />
//                   <span style={{ fontSize: '14px' }}>{selectedArticle.readTime} read</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Article Content */}
//         <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px 48px' }}>
//           {/* Social Actions Bar */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '24px 0',
//             borderBottom: '1px solid #e5e7eb',
//             marginBottom: '48px',
//             position: 'sticky',
//             top: 0,
//             background: 'rgba(255,255,255,0.8)',
//             backdropFilter: 'blur(12px)',
//             zIndex: 10
//           }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//               <button
//                 onClick={() => handleLike(selectedArticle.id)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   padding: '8px 16px',
//                   borderRadius: '9999px',
//                   background: liked[selectedArticle.id] ? '#fef2f2' : '#f3f4f6',
//                   color: liked[selectedArticle.id] ? '#ef4444' : '#4b5563',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500'
//                 }}
//               >
//                 <ThumbsUp size={18} fill={liked[selectedArticle.id] ? 'currentColor' : 'none'} />
//                 {selectedArticle.likes + (liked[selectedArticle.id] ? 1 : 0)}
//               </button>
              
//               <button style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 padding: '8px 16px',
//                 borderRadius: '9999px',
//                 background: '#f3f4f6',
//                 color: '#4b5563',
//                 border: 'none',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 <MessageCircle size={18} />
//                 {selectedArticle.comments}
//               </button>
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//               <button
//                 onClick={() => handleBookmark(selectedArticle.id)}
//                 style={{
//                   padding: '8px',
//                   borderRadius: '9999px',
//                   background: bookmarked[selectedArticle.id] ? '#fef9c3' : '#f3f4f6',
//                   color: bookmarked[selectedArticle.id] ? '#ca8a04' : '#4b5563',
//                   border: 'none',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <Bookmark size={18} fill={bookmarked[selectedArticle.id] ? 'currentColor' : 'none'} />
//               </button>
              
//               <button style={{
//                 padding: '8px',
//                 borderRadius: '9999px',
//                 background: '#f3f4f6',
//                 color: '#4b5563',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}>
//                 <Share2 size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Article Body */}
//           <article style={articleContentStyles}>
//             <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
//           </article>

//           {/* Tags */}
//           <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #e5e7eb' }}>
//             <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
//               Related Topics
//             </h3>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//               {selectedArticle.tags.map((tag, idx) => (
//                 <span 
//                   key={idx}
//                   style={{
//                     padding: '8px 16px',
//                     background: '#faf5ff',
//                     color: '#7c3aed',
//                     borderRadius: '9999px',
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Author Bio */}
//           <div style={{
//             marginTop: '48px',
//             padding: '32px',
//             background: 'linear-gradient(to bottom right, #faf5ff, #fce7f3)',
//             borderRadius: '16px'
//           }}>
//             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
//               <div style={{
//                 width: '80px',
//                 height: '80px',
//                 borderRadius: '50%',
//                 background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontSize: '1.5rem',
//                 fontWeight: 'bold',
//                 flexShrink: 0
//               }}>
//                 {selectedArticle.author.split(' ').map(n => n[0]).join('')}
//               </div>
//               <div>
//                 <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
//                   {selectedArticle.author}
//                 </h3>
//                 <p style={{ color: '#7c3aed', fontWeight: '500', marginBottom: '12px' }}>
//                   {selectedArticle.authorRole}
//                 </p>
//                 <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
//                   {selectedArticle.authorBio}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Related Articles */}
//           <div style={{ marginTop: '64px' }}>
//             <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '32px' }}>
//               More Articles
//             </h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
//               {articles.filter(a => a.id !== selectedArticle.id).slice(0, 2).map((article) => (
//                 <div
//                   key={article.id}
//                   onClick={() => setSelectedArticle(article)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div style={{ position: 'relative', height: '192px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
//                     <img 
//                       src={article.image} 
//                       alt={article.title}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
//                     />
//                     <div style={{
//                       position: 'absolute',
//                       inset: 0,
//                       background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
//                     }}></div>
//                     <span style={{
//                       position: 'absolute',
//                       top: '16px',
//                       left: '16px',
//                       padding: '4px 12px',
//                       background: '#a855f7',
//                       color: 'white',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       borderRadius: '9999px'
//                     }}>
//                       {article.category}
//                     </span>
//                   </div>
//                   <h3 style={{
//                     fontSize: '1.25rem',
//                     fontWeight: 'bold',
//                     color: '#111827',
//                     marginBottom: '8px',
//                     display: '-webkit-box',
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: 'vertical',
//                     overflow: 'hidden'
//                   }}>
//                     {article.title}
//                   </h3>
//                   <p style={{
//                     color: '#4b5563',
//                     fontSize: '14px',
//                     marginBottom: '12px',
//                     display: '-webkit-box',
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: 'vertical',
//                     overflow: 'hidden'
//                   }}>
//                     {article.excerpt}
//                   </p>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#6b7280', fontSize: '12px' }}>
//                     <span>{article.readTime}</span>
//                     <span>•</span>
//                     <span>{article.date}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <style>{`
//           .article-content .lead {
//             font-size: 1.25rem;
//             font-weight: 500;
//             color: #4B5563;
//             margin-bottom: 2rem;
//             line-height: 1.75;
//           }
          
//           .article-content h2 {
//             font-size: 1.875rem;
//             font-weight: 700;
//             color: #111827;
//             margin-top: 3rem;
//             margin-bottom: 1.5rem;
//             line-height: 1.3;
//           }
          
//           .article-content p {
//             margin-bottom: 1.5rem;
//             font-size: 1.125rem;
//           }
          
//           .article-content ul {
//             margin-bottom: 1.5rem;
//             padding-left: 2rem;
//           }
          
//           .article-content li {
//             margin-bottom: 0.75rem;
//             font-size: 1.125rem;
//             line-height: 1.75;
//           }
          
//           .article-content blockquote {
//             border-left: 4px solid #9333EA;
//             padding-left: 1.5rem;
//             margin: 2rem 0;
//             font-style: italic;
//             color: #6B7280;
//             background: #F9FAFB;
//             padding: 1.5rem;
//             border-radius: 0.5rem;
//           }
          
//           .article-content strong {
//             font-weight: 600;
//             color: #1F2937;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)'
//     }}>
//       {/* Hero Section */}
//       <div style={{ position: 'relative', overflow: 'hidden' }}>
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.05)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
//           opacity: 0.3
//         }}></div>
        
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative' }}>
//           <div style={{ textAlign: 'center' }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
//               <Sparkles style={{ color: '#c084fc', animation: 'pulse 2s infinite' }} size={32} />
//               <h1 style={{
//                 fontSize: '4.5rem',
//                 fontWeight: 'bold',
//                 background: 'linear-gradient(to right, #c084fc, #f9a8d4, #c084fc)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//                 AI Insights Hub
//               </h1>
//             </div>
//             <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginBottom: '32px', maxWidth: '768px', margin: '0 auto 48px' }}>
//               Discover the latest breakthroughs and insights shaping the future of artificial intelligence
//             </p>
            
//             {/* Category Filter */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setFilter(cat)}
//                   style={{
//                     padding: '10px 24px',
//                     borderRadius: '9999px',
//                     fontWeight: '500',
//                     border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
//                     background: filter === cat ? 'linear-gradient(to right, #a855f7, #ec4899)' : 'rgba(255,255,255,0.1)',
//                     color: filter === cat ? 'white' : '#d1d5db',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s',
//                     boxShadow: filter === cat ? '0 10px 25px rgba(168, 85, 247, 0.3)' : 'none'
//                   }}
//                 >
//                   {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Articles Grid */}
//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
//           {filteredArticles.map((article, idx) => (
//             <div
//               key={article.id}
//               onMouseEnter={() => setHoveredCard(article.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               style={{
//                 background: 'rgba(255,255,255,0.1)',
//                 backdropFilter: 'blur(24px)',
//                 borderRadius: '24px',
//                 overflow: 'hidden',
//                 boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//                 transition: 'all 0.5s',
//                 transform: hoveredCard === article.id ? 'scale(1.05)' : 'scale(1)',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
//               }}
//             >
//               <div style={{ position: 'relative', height: '224px', overflow: 'hidden' }}>
//                 <img 
//                   src={article.image} 
//                   alt={article.title}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     transition: 'transform 0.7s',
//                     transform: hoveredCard === article.id ? 'scale(1.1)' : 'scale(1)'
//                   }}
//                 />
//                 <div style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
//                 }}></div>
//                 <span style={{
//                   position: 'absolute',
//                   top: '16px',
//                   left: '16px',
//                   padding: '4px 12px',
//                   background: '#a855f7',
//                   color: 'white',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   borderRadius: '9999px'
//                 }}>
//                   {article.category}
//                 </span>
//               </div>
              
//               <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//                 <h3 style={{
//                   fontSize: '1.25rem',
//                   fontWeight: 'bold',
//                   color: 'white',
//                   marginBottom: '12px',
//                   display: '-webkit-box',
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: 'vertical',
//                   overflow: 'hidden'
//                 }}>
//                   {article.title}
//                 </h3>
                
//                 <p style={{
//                   color: '#d1d5db',
//                   fontSize: '14px',
//                   marginBottom: '16px',
//                   flexGrow: 1,
//                   display: '-webkit-box',
//                   WebkitLineClamp: 3,
//                   WebkitBoxOrient: 'vertical',
//                   overflow: 'hidden'
//                 }}>
//                   {article.excerpt}
//                 </p>
                
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   color: '#9ca3af',
//                   fontSize: '12px',
//                   marginBottom: '16px'
//                 }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//                     <Clock size={14} />
//                     <span>{article.readTime}</span>
//                   </div>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//                     <Calendar size={14} />
//                     <span>{article.date}</span>
//                   </div>
//                 </div>
                
//                 <button
//                   onClick={() => setSelectedArticle(article)}
//                   style={{
//                     width: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: hoveredCard === article.id ? '12px' : '8px',
//                     background: 'linear-gradient(to right, #a855f7, #ec4899)',
//                     color: 'white',
//                     padding: '12px',
//                     borderRadius: '12px',
//                     fontWeight: '500',
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s',
//                     boxShadow: hoveredCard === article.id ? '0 10px 25px rgba(168, 85, 247, 0.5)' : 'none'
//                   }}
//                 >
//                   Read Article
//                   <ArrowRight 
//                     size={16} 
//                     style={{
//                       transition: 'transform 0.3s',
//                       transform: hoveredCard === article.id ? 'translateX(4px)' : 'translateX(0)'
//                     }} 
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10%",
        padding: "2%",
        borderRadius: "12px",
        background: "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)",
        color: "white",
        textAlign: "center",
        flexDirection: "column",
        minHeight: "60vh",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      }}
    >
      <h1>We are working on this page — Stay Connected!</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem", opacity: 0.8 }}>
        New articles and features will be live soon.
      </p>

      {/* 🟢 Back Button */}
      <button
        onClick={() => navigate(-1)} // Goes back to previous page
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          background: "#9333ea",
          color: "white",
          fontSize: "1rem",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#a855f7")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "#9333ea")
        }
      >
        Go Back
      </button>
    </div>
  );
};

export default Articles;


