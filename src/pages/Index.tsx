import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const mockAudiobooks = [
  {
    id: 1,
    title: "Война и мир",
    author: "Лев Толстой",
    narrator: "Иван Литвинов",
    duration: "67 ч 30 мин",
    genre: "Классика",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    narrator: "Ольга Смирнова",
    duration: "15 ч 45 мин",
    genre: "Фантастика",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Анна Каренина",
    author: "Лев Толстой",
    narrator: "Мария Петрова",
    duration: "35 ч 20 мин",
    genre: "Классика",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    narrator: "Андрей Соколов",
    duration: "22 ч 15 мин",
    genre: "Классика",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    narrator: "Елена Васильева",
    duration: "8 ч 30 мин",
    genre: "Поэзия",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Тихий Дон",
    author: "Михаил Шолохов",
    narrator: "Дмитрий Волков",
    duration: "52 ч 10 мин",
    genre: "Роман",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
  }
];

export default function Index() {
  const [currentBook, setCurrentBook] = useState(mockAudiobooks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([30]);
  const [activeSection, setActiveSection] = useState('home');

  const genres = ["Классика", "Фантастика", "Детектив", "Научная литература", "Поэзия", "Роман"];
  
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Библиотека Звуков</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Каталог', 'Жанры', 'Бестселлеры', 'Новинки', 'Авторы', 'Подписка', 'О нас', 'Контакты'].map((item) => (
                <button 
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <Button size="sm" className="hidden md:flex">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Headphones" size={16} className="mr-2" />
              Более 10,000 аудиокниг
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Откройте мир литературы через звук
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наслаждайтесь классикой и современной литературой в исполнении профессиональных дикторов. 
              Ваша личная библиотека всегда с вами.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Play" size={20} />
                Начать слушать
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Search" size={20} />
                Обзор каталога
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Популярные жанры</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-scale-in">
            {genres.map((genre) => (
              <Card key={genre} className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 bg-card">
                <CardContent className="p-6 text-center">
                  <Icon name="BookMarked" size={32} className="mx-auto mb-3 text-accent" />
                  <p className="font-semibold">{genre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Бестселлеры месяца</h3>
              <p className="text-muted-foreground">Самые популярные аудиокниги русской классики</p>
            </div>
            <Button variant="outline">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAudiobooks.slice(0, 6).map((book, index) => (
              <Card 
                key={book.id} 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setCurrentBook(book)}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-muted to-secondary">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    <Icon name="Star" size={12} className="mr-1" />
                    {book.rating}
                  </Badge>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Badge variant="secondary" className="mb-2 text-xs">{book.genre}</Badge>
                    <h4 className="text-lg font-bold mb-1">{book.title}</h4>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Автор: {book.author}</p>
                  <p className="text-sm text-muted-foreground mb-3">Читает: {book.narrator}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {book.duration}
                    </div>
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentBook(book);
                        setIsPlaying(true);
                      }}
                    >
                      <Icon name="Play" size={14} />
                      Слушать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-4xl font-bold mb-4">Безлимитный доступ ко всем книгам</h3>
            <p className="text-xl mb-8 opacity-90">
              Оформите подписку и получите доступ к более чем 10,000 аудиокниг. 
              Слушайте без ограничений на всех устройствах.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-primary-foreground text-foreground">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Месяц</h4>
                  <p className="text-4xl font-bold mb-4">390₽</p>
                  <Button className="w-full" variant="default">Попробовать</Button>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground transform scale-105 shadow-xl">
                <CardContent className="p-6 text-center">
                  <Badge className="mb-3">Популярный</Badge>
                  <h4 className="text-xl font-bold mb-2">Полгода</h4>
                  <p className="text-4xl font-bold mb-4">1990₽</p>
                  <p className="text-sm mb-4">331₽ / месяц</p>
                  <Button className="w-full" variant="secondary">Выбрать</Button>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-foreground">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Год</h4>
                  <p className="text-4xl font-bold mb-4">3490₽</p>
                  <p className="text-sm mb-4">291₽ / месяц</p>
                  <Button className="w-full" variant="default">Оформить</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Почему выбирают нас?</h3>
            <p className="text-muted-foreground">Мы создали лучший сервис для любителей аудиокниг</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Mic" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2">Профессиональная озвучка</h4>
              <p className="text-muted-foreground">Все книги озвучены профессиональными дикторами с отличной дикцией</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Download" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2">Офлайн-режим</h4>
              <p className="text-muted-foreground">Скачивайте книги и слушайте их без интернета в любом месте</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Bookmark" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2">Закладки и заметки</h4>
              <p className="text-muted-foreground">Сохраняйте любимые моменты и делайте заметки прямо во время прослушивания</p>
            </div>
          </div>
        </div>
      </section>

      {currentBook && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img src={currentBook.cover} alt={currentBook.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate">{currentBook.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{currentBook.author} • {currentBook.narrator}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <Icon name="SkipBack" size={20} />
                </Button>
                
                <Button 
                  size="icon" 
                  className="w-12 h-12"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                </Button>
                
                <Button size="icon" variant="ghost">
                  <Icon name="SkipForward" size={20} />
                </Button>
              </div>
              
              <div className="hidden md:flex items-center gap-3 flex-1 max-w-md">
                <span className="text-xs text-muted-foreground">15:30</span>
                <Slider 
                  value={currentTime}
                  onValueChange={setCurrentTime}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground">{currentBook.duration}</span>
              </div>
              
              <div className="hidden lg:flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <Icon name="Volume2" size={20} />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon name="ListMusic" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-primary text-primary-foreground py-12 pb-32 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BookOpen" size={28} />
                <h3 className="text-xl font-bold">Библиотека Звуков</h3>
              </div>
              <p className="text-sm opacity-80">Ваша личная аудиобиблиотека русской классики и современной литературы</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Жанры</a></li>
                <li><a href="#" className="hover:opacity-100">Бестселлеры</a></li>
                <li><a href="#" className="hover:opacity-100">Новинки</a></li>
                <li><a href="#" className="hover:opacity-100">Авторы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">О компании</a></li>
                <li><a href="#" className="hover:opacity-100">Контакты</a></li>
                <li><a href="#" className="hover:opacity-100">Подписка</a></li>
                <li><a href="#" className="hover:opacity-100">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="secondary">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Библиотека Звуков. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
